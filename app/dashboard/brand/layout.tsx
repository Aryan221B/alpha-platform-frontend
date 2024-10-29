import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import BrandSidebar from '@/components/dashboard/brand/BrandSidebar';

export const metadata: Metadata = {
  title: 'Brand Dashboard | ALPHA Platform',
  description: 'Manage your campaigns and influencer relationships',
};

export default async function BrandDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || session.user.type !== 'brand') {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <BrandSidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
