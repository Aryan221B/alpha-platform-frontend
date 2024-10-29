'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as Form from '@radix-ui/react-form';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit} className="space-y-6">
      <Form.Field name="email">
        <Form.Label className="block text-sm font-medium text-gray-700">
          Email address
        </Form.Label>
        <Form.Control asChild>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </Form.Control>
        <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
          Please enter your email
        </Form.Message>
        <Form.Message match="typeMismatch" className="text-red-500 text-sm mt-1">
          Please enter a valid email
        </Form.Message>
      </Form.Field>

      <Form.Field name="password">
        <Form.Label className="block text-sm font-medium text-gray-700">
          Password
        </Form.Label>
        <Form.Control asChild>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
            minLength={8}
          />
        </Form.Control>
        <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
          Please enter your password
        </Form.Message>
        <Form.Message match="tooShort" className="text-red-500 text-sm mt-1">
          Password must be at least 8 characters
        </Form.Message>
      </Form.Field>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileTap={{ scale: 0.98 }}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </motion.button>
    </Form.Root>
  );
}
