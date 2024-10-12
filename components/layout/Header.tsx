'use client';

// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as HoverCard from '@radix-ui/react-hover-card';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';

const DropdownContent = dynamic(() => import('./DropdownContent'), { ssr: false });

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
              <HoverCard.Root key={category.name} openDelay={100} closeDelay={300}>
                <HoverCard.Trigger asChild>
                  <button className="flex items-center text-white hover:text-gray-300 px-3 py-2 text-base font-medium focus:outline-none relative group">
                    {category.name}
                    <ChevronDownIcon className="ml-1" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
                  </button>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content className="bg-black text-white shadow-lg rounded-md p-6 w-[800px] mt-2" sideOffset={5}>
                    <DropdownContent category={category} />
                    <HoverCard.Arrow className="fill-black" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
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
            <Link href="/login" className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium relative group">
              Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
            </Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
