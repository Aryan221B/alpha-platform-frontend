import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface RouteGuardProps {
  userType: 'brand' | 'influencer';
  children: React.ReactNode;
}

const RouteGuard = ({ userType, children }: RouteGuardProps) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || session.user.type !== userType) {
    redirect('/login');
  }

  return <>{children}</>;
};

export default RouteGuard;
