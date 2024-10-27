'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Form from '@radix-ui/react-form';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
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
    .oneOf(['influencer', 'brand'], 'Please select a valid user type')
    .required('Please select your user type'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      userType: 'influencer',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form.Root onSubmit={formik.handleSubmit} className="space-y-6">
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
              <option value="influencer">Influencer</option>
              <option value="brand">Brand</option>
            </select>
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <motion.button
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
