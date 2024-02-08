import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import apiHandler from '../../api/apiHandler';



// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticsComponent({ shortUrl }) {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHandler.getAnalytics(shortUrl);
        setAnalyticsData(data);
        console.log('Fetched analytics data:', data);
      } catch (error) {
        setError(error);
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchData();
  }, [shortUrl]);

  const countClicksByTimestamp = () => {
    const clickCounts = {};
    // Check if analyticsData is not null before accessing its properties
    if (analyticsData && analyticsData.analytics) {
      analyticsData.analytics.forEach((data) => {
        const date = new Date(data.timestamp).toDateString();
        clickCounts[date] = (clickCounts[date] || 0) + 1;
      });
    }
    return clickCounts;
  };

  const chartData = {
    labels: Object.keys(countClicksByTimestamp()),
    datasets: [
      {
        label: 'Clicks by Timestamp',
        data: Object.values(countClicksByTimestamp()),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Clicks by Timestamp',
      },
    },
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      {error && <p className="text-red-500">Error fetching analytics data: {error.message}</p>}
      {analyticsData && (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-xl font-bold mb-4">Analytics for {shortUrl}</p>
          <p className="mb-2">Total Clicks: {analyticsData.totalClicks}</p>
          <div className="mt-4">
            <Bar data={chartData} options={chartOptions} />
          </div>
          {/* Additional analytics data can be displayed here */}
        </div>
      )}
    </div>
  );
}

export default AnalyticsComponent;
