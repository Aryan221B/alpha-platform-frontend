import { notFound } from 'next/navigation';
import InfluencerProfile from '@/components/InfluencerProfile';
import { getInfluencer } from '@/lib/api'; // Adjust the path as needed

export default async function InfluencerPage({ params }: { params: { id: string } }) {
  const influencer = await getInfluencer(params.id);

  if (!influencer) {
    notFound();
  }

  return <InfluencerProfile influencer={influencer} />;
}
