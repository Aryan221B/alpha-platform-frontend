import React from 'react';
import Image from 'next/image';

export default function InfluencerProfile({ influencer }) {
  return (
    <div className="influencer-profile container mx-auto px-4 mt-8">
      <div className="flex items-center">
        <Image
          src={influencer.profileImage}
          alt={influencer.name}
          width={96}
          height={96}
          className="rounded-full"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{influencer.name}</h1>
          <p className="text-gray-600">{influencer.industry.join(', ')}</p>
        </div>
      </div>
      {/* Add more profile content here */}
    </div>
  );
}
