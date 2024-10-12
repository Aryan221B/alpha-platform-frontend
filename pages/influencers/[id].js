// pages/influencers/[id].js

import React from 'react';
import api from '../../utils/api';

function InfluencerProfile({ influencer }) {
  if (!influencer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="influencer-profile container mx-auto px-4 mt-8">
      {/* Profile Header */}
      <div className="flex items-center">
        {/* Placeholder for profile image */}
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{influencer.name}</h1>
          <p className="text-gray-600">{influencer.industry.join(', ')}</p>
        </div>
      </div>
      {/* Content and Metrics */}
      {/* ... */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await api.get(`/influencers/${params.id}`);
    return { props: { influencer: response.data } };
  } catch (error) {
    console.error('Error fetching influencer:', error);
    return { props: { influencer: null } };
  }
}

export default InfluencerProfile;
