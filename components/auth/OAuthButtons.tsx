'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function OAuthButtons() {
  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/dashboard' });
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => handleOAuthSignIn('google')}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <FcGoogle className="h-5 w-5 mr-2" />
        Continue with Google
      </button>

      <button
        onClick={() => handleOAuthSignIn('facebook')}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#166FE5]"
      >
        <FaFacebook className="h-5 w-5 mr-2" />
        Continue with Facebook
      </button>

      <button
        onClick={() => handleOAuthSignIn('instagram')}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
      >
        <FaInstagram className="h-5 w-5 mr-2" />
        Continue with Instagram
      </button>
    </div>
  );
}
