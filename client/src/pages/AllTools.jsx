// src/pages/AllTools.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToolCard from '../components/ToolCard';
import CategoryChart from '../components/CategoryChart';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const AllTools = () => {
  const [tools, setTools] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [confetti, setConfetti] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    fetchTools();
    fetchFavorites();
  }, []);

  const fetchTools = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/tools${category ? `?category=${category}` : ''}`);
      setTools(res.data);
    } catch (err) {
      setMsg('Error loading tools');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    const res = await axios.get('http://localhost:5000/api/favorites');
    setFavorites(res.data.map(f => f.id));
  };

  const handleFavorite = async (toolId) => {
    try {
      await axios.post('http://localhost:5000/api/favorites', { toolId });
      fetchFavorites();
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error saving favorite');
    }
  };

  const filteredTools = tools.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>All AI Tools</h2>
      <input placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} />
      <select onChange={e => { setCategory(e.target.value); fetchTools(); }} value={category}>
        <option value="">All Categories</option>
        <option value="Writing">Writing</option>
        <option value="Design">Design</option>
      </select>
      {confetti && <Confetti width={width} height={height} />}
      {loading ? <p>Loading...</p> :
        filteredTools.length === 0 ? <p>No tools found</p> :
          filteredTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={favorites.includes(tool.id)}
              onFavorite={handleFavorite}
            />
          ))}
      <CategoryChart tools={tools} />
      {msg && <p style={{ color: 'red' }}>{msg}</p>}
    </div>
  );
};

export default AllTools;
