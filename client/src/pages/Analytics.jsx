import React from 'react';
import { useParams } from 'react-router-dom';
import AnalyticsComponent from '../components/Analytics/Analytics.component';


function Analytics() {
  // Get the shortid parameter from the URL
  const { shortid } = useParams();

  return (
    <div>
      <h2>Analytics for Short URL: {shortid}</h2>
      <AnalyticsComponent shortUrl={shortid} />
      {/* Your analytics content goes here */}
    </div>
  );
}

export default Analytics;
