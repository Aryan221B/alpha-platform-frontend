import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form.Root className="space-y-6" onSubmit={handleSubmit}>
          <Form.Field className="space-y-2" name="email">
            <Form.Label className="text-sm font-medium text-gray-700">
              Email address
            </Form.Label>
            <Form.Control asChild>
              <input
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Control>
            <Form.Message className="text-sm text-red-500" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="text-sm text-red-500" match="typeMismatch">
              Please enter a valid email
            </Form.Message>
          </Form.Field>

          <Form.Field className="space-y-2" name="password">
            <Form.Label className="text-sm font-medium text-gray-700">
              Password
            </Form.Label>
            <Form.Control asChild>
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Control>
            <Form.Message className="text-sm text-red-500" match="valueMissing">
              Please enter your password
            </Form.Message>
          </Form.Field>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox.Root
                className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white"
                id="remember-me"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="h-4 w-4 text-blue-500" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <Form.Submit asChild>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default LoginForm;
