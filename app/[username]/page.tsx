import { notFound } from 'next/navigation';
import Calendar from '@/components/Calendar/Calendar';
import { getInfluencerByUsername } from '@/lib/api';

export default async function InfluencerPage({ params }: { params: { username: string } }) {
  const influencer = await getInfluencerByUsername(params.username);

  if (!influencer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{influencer.name}'s Availability</h1>
        <Calendar influencerId={influencer.id} />
      </div>
    </div>
  );
}
