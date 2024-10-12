// pages/influencers/index.js

import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import InfluencerCard from '../../components/InfluencerCard';
import FilterBar from '../../components/FilterBar';

function Influencers() {
  const [influencers, setInfluencers] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchInfluencers = async () => {
    try {
      const response = await api.get('/influencers', { params: filters });
      setInfluencers(response.data.influencers);
    } catch (error) {
      console.error('Error fetching influencers:', error);
    }
  };

  useEffect(() => {
    fetchInfluencers();
  }, [filters]);

  return (
    <div className="influencers-page container mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">Influencers</h1>
      <FilterBar onFilterChange={setFilters} />
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>
    </div>
  );
}

export default Influencers;
