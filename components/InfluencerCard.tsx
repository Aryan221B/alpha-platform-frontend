import React from 'react';
import { Influencer } from './InfluencerList'; // Import the Influencer type

interface InfluencerCardProps {
  influencer: Influencer;
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({ influencer }) => {
  // Implement the InfluencerCard component
  return (
    <div>
      <h2>{influencer.name}</h2>
      {/* Add more influencer details */}
    </div>
  );
};

export default InfluencerCard;
