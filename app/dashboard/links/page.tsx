import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import LinksManager from '@/components/dashboard/LinksManager';

export default async function LinksPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return <LinksManager />;
}
