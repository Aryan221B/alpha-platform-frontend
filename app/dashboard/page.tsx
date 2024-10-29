import DashboardTabs from '@/components/dashboard/DashboardTabs';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return <DashboardTabs />;
}
