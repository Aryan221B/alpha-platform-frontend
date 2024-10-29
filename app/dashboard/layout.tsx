import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import DashboardNav from '@/components/dashboard/DashboardNav';

export const metadata: Metadata = {
  title: 'Dashboard | ALPHA Platform',
  description: 'Manage your content and settings',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
