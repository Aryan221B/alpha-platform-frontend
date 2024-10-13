import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as Form from '@radix-ui/react-form';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex">
      {/* Left Section */}
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>
        <p className="text-xl mb-8">We're excited to hear from you and explore how we can work together to achieve your goals.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-1/2 pl-8">
        <Form.Root className="space-y-6 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <Form.Field name="name">
              <Form.Control asChild>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Name"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="company">
              <Form.Control asChild>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Company"
                />
              </Form.Control>
            </Form.Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Field name="email">
              <Form.Control asChild>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="phone">
              <Form.Control asChild>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  placeholder="Phone"
                />
              </Form.Control>
            </Form.Field>
          </div>
          <Select.Root name="inquiryType">
            <Select.Trigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center">
              <Select.Value placeholder="Select Inquiry Type" />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg">
                <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-2">
                  <Select.Item value="general" className="relative flex items-center h-8 px-4 rounded select-none hover:bg-gray-100 cursor-pointer">
                    <Select.ItemText>General Inquiry</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="support" className="relative flex items-center h-8 px-4 rounded select-none hover:bg-gray-100 cursor-pointer">
                    <Select.ItemText>Support</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="partnership" className="relative flex items-center h-8 px-4 rounded select-none hover:bg-gray-100 cursor-pointer">
                    <Select.ItemText>Partnership</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <Form.Field name="message">
            <Form.Control asChild>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Additional Details"
                rows={6}
                required
              />
            </Form.Control>
          </Form.Field>
          <div className="text-center">
            <Form.Submit asChild>
              <button
                className="px-8 py-3 bg-white text-black border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                type="submit"
              >
                Contact Us
              </button>
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
    </div>
  );
};

export default ContactPage;
