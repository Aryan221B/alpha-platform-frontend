// pages/signup.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../utils/api';

function Signup() {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', userType: 'influencer' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      userType: Yup.string().oneOf(['influencer', 'brand']).required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await api.post('/auth/signup', values);
        // Redirect to login or welcome page
      } catch (error) {
        console.error('Signup failed:', error);
        // Handle error
      }
    },
  });

  return (
    <div className="signup-page container mx-auto px-4 mt-8">
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full px-4 py-2 border rounded"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-4 py-2 border rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full px-4 py-2 border rounded"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block mb-1">I am a:</label>
          <select
            name="userType"
            onChange={formik.handleChange}
            value={formik.values.userType}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="influencer">Influencer</option>
            <option value="brand">Brand</option>
          </select>
          {formik.touched.userType && formik.errors.userType ? (
            <div className="text-red-600 text-sm mt-1">{formik.errors.userType}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
