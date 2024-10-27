import { Metadata } from 'next';
import SignupForm from '@/components/auth/SignupForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sign Up | ALPHA Platform',
  description: 'Join ALPHA Platform - Connect with brands and creators',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join thousands of creators and brands
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
      
      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 bg-indigo-600 text-white p-12 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Why join ALPHA Platform?</h2>
          <div className="space-y-6">
            <Feature
              title="Connect with Brands"
              description="Access exclusive partnership opportunities"
            />
            <Feature
              title="Grow Your Audience"
              description="Reach millions of potential followers"
            />
            <Feature
              title="Secure Platform"
              description="Advanced security with 2FA protection"
            />
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Pattern />
        </div>
      </div>
    </div>
  );
}

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
        {/* Icon */}
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-base text-indigo-100">{description}</p>
    </div>
  </div>
);

