import InfluencerOverview from '@/components/dashboard/influencer/InfluencerOverview';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function InfluencerDashboardPage() {
  const session = await getServerSession();

  if (!session || session.user.type !== 'influencer') {
    redirect('/login');
  }

  return <InfluencerOverview />;
}
