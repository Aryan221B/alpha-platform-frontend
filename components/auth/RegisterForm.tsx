import React from 'react';
import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

const RegisterForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            Create your account
          </h2>
        </div>
        <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Form.Field name="name">
            <Form.Label className="block text-sm font-medium text-gray-700">Name</Form.Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Control asChild>
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </Form.Control>
              )}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </Form.Field>

          <Form.Field name="email">
            <Form.Label className="block text-sm font-medium text-gray-700">Email address</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Control asChild>
                  <input
                    {...field}
                    type="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </Form.Control>
              )}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </Form.Field>

          <Form.Field name="password">
            <Form.Label className="block text-sm font-medium text-gray-700">Password</Form.Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Form.Control asChild>
                  <input
                    {...field}
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </Form.Control>
              )}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </Form.Field>

          <Form.Field name="confirmPassword">
            <Form.Label className="block text-sm font-medium text-gray-700">Confirm Password</Form.Label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Form.Control asChild>
                  <input
                    {...field}
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                               focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </Form.Control>
              )}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
          </Form.Field>

          <div className="flex items-center">
            <Controller
              name="agreeTerms"
              control={control}
              render={({ field }) => (
                <Checkbox.Root
                  className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="h-4 w-4 text-blue-500" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              )}
            />
            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
            </label>
          </div>
          {errors.agreeTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeTerms.message}</p>}

          <Form.Submit asChild>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default RegisterForm;

