'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Form from '@radix-ui/react-form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  userType: yup
    .string()
    .oneOf(['CREATOR', 'BRAND'], 'Please select a valid user type')
    .required('Please select your user type'),
});

const SignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      userType: 'CREATOR',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setError('');
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to create account');
        }

        router.push('/auth/login?signup=success');
      } catch (error) {
        console.error('Signup error:', error);
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form.Root onSubmit={formik.handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <Form.Field name="name">
          <Form.Label className="block text-sm font-medium text-gray-700">
            Name
          </Form.Label>
          <Form.Control asChild>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Control>
          {formik.touched.name && formik.errors.name && (
            <Form.Message className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="email">
          <Form.Label className="block text-sm font-medium text-gray-700">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Control>
          {formik.touched.email && formik.errors.email && (
            <Form.Message className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="password">
          <Form.Label className="block text-sm font-medium text-gray-700">
            Password
          </Form.Label>
          <Form.Control asChild>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </Form.Control>
          {formik.touched.password && formik.errors.password && (
            <Form.Message className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="userType">
          <Form.Label className="block text-sm font-medium text-gray-700">
            I am a:
          </Form.Label>
          <Form.Control asChild>
            <select
              name="userType"
              onChange={formik.handleChange}
              value={formik.values.userType}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="CREATOR">Influencer</option>
              <option value="BRAND">Brand</option>
            </select>
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </motion.button>
        </Form.Submit>
      </Form.Root>
    </motion.div>
  );
};

export default SignupForm;
