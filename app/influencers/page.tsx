import InfluencerList from '../../components/InfluencerList';

export default function InfluencersPage() {
  return (
    <div className="influencers-page container mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">Influencers</h1>
      <InfluencerList />
    </div>
  );
}
