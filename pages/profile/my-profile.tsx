import React from 'react';
import Layout from '@/components/layout/Layout';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ProfileSidebar from '@/components/profile/ProfileSidebar';

const MyProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Protect the route
  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Header */}
            <div className="w-full md:w-1/4">
              <ProfileSidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <DashboardTabs />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfilePage;
