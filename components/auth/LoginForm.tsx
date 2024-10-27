'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import * as Form from '@radix-ui/react-form';

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}
      <Form.Field name="email">
        <Form.Label className="block text-sm font-medium text-gray-700">
          Email
        </Form.Label>
        <Form.Control asChild>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field name="password">
        <Form.Label className="block text-sm font-medium text-gray-700">
          Password
        </Form.Label>
        <Form.Control asChild>
          <input
            type="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </Form.Control>
      </Form.Field>

      <div className="flex items-center justify-between">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </Link>
      </div>

      <Form.Submit asChild>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
