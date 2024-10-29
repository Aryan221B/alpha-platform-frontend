import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Pattern from '@/components/ui/Pattern';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';

export const metadata: Metadata = {
  title: 'Sign In | ALPHA Platform',
  description: 'Sign in to your ALPHA Platform account',
};

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Pattern />
      </div>

      {/* Content */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link 
            href="/auth/sign-up" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <OAuthButtons />
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
