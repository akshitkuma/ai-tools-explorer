// src/components/CategoryChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CategoryChart = ({ tools }) => {
  const counts = tools.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Tools per Category',
        data: Object.values(counts),
        backgroundColor: 'rgba(153,102,255,0.6)',
      }
    ]
  };

  return <Bar data={data} />;
};

export default CategoryChart;
