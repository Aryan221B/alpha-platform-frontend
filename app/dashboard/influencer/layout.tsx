import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import InfluencerSidebar from '@/components/dashboard/influencer/InfluencerSidebar';

export const metadata: Metadata = {
  title: 'Creator Dashboard | ALPHA Platform',
  description: 'Manage your content and brand partnerships',
};

export default async function InfluencerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || session.user.type !== 'influencer') {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <InfluencerSidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
