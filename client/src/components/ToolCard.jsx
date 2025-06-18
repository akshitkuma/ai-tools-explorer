import React from 'react';

const ToolCard = ({ tool, isFavorite, onFavorite }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
    <h3>{tool.name}</h3>
    <p>{tool.category}</p>
    <p>{tool.excerpt}</p>
    <button onClick={() => onFavorite(tool.id)} disabled={isFavorite}>
      {isFavorite ? '❤️ Saved' : '🤍 Favorite'}
    </button>
  </div>
);

export default ToolCard;
