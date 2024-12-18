import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import SignupForm from '@/components/auth/SignupForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Link from 'next/link';
import * as Separator from '@radix-ui/react-separator';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const metadata: Metadata = {
  title: 'Sign Up | ALPHA Platform',
  description: 'Create your ALPHA Platform account',
};

export default async function SignupPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <AspectRatio.Root ratio={16 / 9} className="w-24 mx-auto">
          {/* Your logo or brand image here */}
        </AspectRatio.Root>
        
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link 
            href="/auth/sign-in" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <OAuthButtons />
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator.Root 
                className="w-full bg-gray-200" 
                style={{ height: '1px' }}
                decorative
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <SignupForm />
        </div>
      </div>
    </div>
  );
}

