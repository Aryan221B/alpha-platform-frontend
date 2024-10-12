'use client';

// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

const categories = [
  {
    name: 'Brands',
    columns: [
      {
        title: 'Shop',
        items: ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Accessories'],
      },
      {
        title: 'Quick Links',
        items: ['Find a Store', 'Order Status', 'Alpha Trade In', 'Financing', 'University Student Offer'],
      },
      {
        title: 'Shop Special Stores',
        items: ['Education', 'Business'],
      },
    ],
  },
  {
    name: 'Alpha',
    columns: [
      {
        title: 'Services',
        items: ['Influencer Marketing', 'Social Media Management', 'Content Creation', 'Brand Partnerships'],
      },
      {
        title: 'Resources',
        items: ['Case Studies', 'Blog', 'Webinars', 'Industry Reports'],
      },
      {
        title: 'Support',
        items: ['Contact Us', 'FAQs', 'Pricing', 'Book a Demo'],
      },
    ],
  },
  // Add other categories here with similar structure
];

function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[60px] md:h-[64px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/og1.webp" alt="Logo" width={80} height={32} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {categories.map((category) => (
              <DropdownMenu.Root key={category.name}>
                <DropdownMenu.Trigger className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-base font-medium focus:outline-none">
                  {category.name} <ChevronDownIcon className="ml-1" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-black text-white shadow-lg rounded-md p-6 w-[800px] mt-2 grid grid-cols-3 gap-8">
                    {category.columns.map((column, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-white text-lg mb-3">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.items.map((item) => (
                            <li key={item}>
                              <Link href={`/${category.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-base text-gray-300 hover:text-white transition-colors">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Authentication Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium">Login</Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;