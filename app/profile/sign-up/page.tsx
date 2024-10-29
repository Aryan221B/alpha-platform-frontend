import { Metadata } from 'next';
import SignupForm from '@/components/auth/SignupForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import dynamic from 'next/dynamic';

// Dynamically import ErrorBoundary with no SSR
const ErrorBoundary = dynamic(
  () => import('@/components/ErrorBoundary'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Sign Up | ALPHA Platform',
  description: 'Create your ALPHA Platform account',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ErrorBoundary>
            <OAuthButtons />
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with email
                  </span>
                </div>
              </div>
            </div>

            <SignupForm />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

