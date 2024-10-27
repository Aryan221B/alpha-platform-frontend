'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TwoFactorAuth() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: { code: string }) => {
    // Handle 2FA verification
    try {
      const response = await fetch('/api/auth/verify-2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: data.code }),
      });
      
      if (response.ok) {
        // Redirect to dashboard or home
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('2FA verification failed:', error);
    }
  };

  if (!showTwoFactor) return null;

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Enter 2FA Code
          </label>
          <input
            {...register('code')}
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Verify Code
        </button>
      </form>
    </div>
  );
}

