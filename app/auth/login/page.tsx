import LoginForm from '@/components/auth/LoginForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';

export default function LoginPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-8">Sign in to your account</h1>
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
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
          Sign up
        </Link>
      </p>
    </>
  );
}

