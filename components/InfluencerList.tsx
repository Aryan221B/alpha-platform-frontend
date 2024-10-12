'use client';

import React, { useState, useEffect } from 'react';
import { getInfluencer as getInfluencers } from '@/lib/api';
import InfluencerCard from './InfluencerCard';
import FilterBar from './FilterBar';
import { useRouter } from 'next/router';

// Add this export statement at the top of the file
export type Filters = {
  search?: string;
  // Add other filter properties as needed
};

// Define a type for the influencer
type Influencer = {
  id: string;
  name: string;
  // Add other influencer properties as needed
};

const InfluencerList: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const data = await getInfluencers(filters);
        setInfluencers(data);
      } catch (error) {
        console.error('Error fetching influencers:', error);
      }
    };

    fetchInfluencers();
  }, [filters]); // Add filters as a dependency

  return (
    <>
      <FilterBar onFilterChange={setFilters} />
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>
    </>
  );
};

export default InfluencerList;
