import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Skills = () => {
  // Sample data for skills and levels
  const candidateSkills = [
    { name: 'JavaScript', level: 2 }, // 1 = Beginner, 2 = Intermediate, 3 = Advanced
    { name: 'React', level: 3 },
    { name: 'CSS', level: 1 },
    { name: 'Node.js', level: 2 },
  ];

  // Labels and data for the chart
  const labels = candidateSkills.map(skill => skill.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Skill Levels',
        data: candidateSkills.map(skill => skill.level),
        backgroundColor: ['#3b82f6', '#fbbf24', '#10b981'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allow custom height
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 3, // Skill levels: 1 = Beginner, 2 = Intermediate, 3 = Advanced
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return ['Beginner', 'Intermediate', 'Advanced'][value - 1];
          }
        }
      },
      x: {
        ticks: {
          color: '#666', // Optional: style the x-axis labels
        }
      }
    },
    plugins: {
      legend: {
        display: false, // Hide legend if only one dataset
      }
    },
  };
  return (
    <Box className="!h-[89%] border !overflow-hidden" sx={{ width: '100%', maxWidth: 600, mt: 4}}>
      <Bar options={options} data={data} height={200} />
    </Box>
  );
};

export default Skills;

