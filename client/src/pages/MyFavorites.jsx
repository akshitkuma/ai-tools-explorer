import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const res = await axios.get('http://localhost:5000/api/favorites');
    setFavorites(res.data);
  };

  const handleRemove = async (id) => {
    await axios.delete(`http://localhost:5000/api/favorites/${id}`);
    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        favorites.map(tool => (
          <div key={tool.id}>
            <h3>{tool.name}</h3>
            <button onClick={() => handleRemove(tool.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyFavorites;