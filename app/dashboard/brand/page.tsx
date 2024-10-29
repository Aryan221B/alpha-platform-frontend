import BrandOverview from '@/components/dashboard/brand/BrandOverview';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function BrandDashboardPage() {
  const session = await getServerSession();

  if (!session || session.user.type !== 'brand') {
    redirect('/login');
  }

  return <BrandOverview />;
}
