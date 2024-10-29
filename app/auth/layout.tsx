import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | ALPHA Platform',
  description: 'Sign in or sign up to ALPHA Platform',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
