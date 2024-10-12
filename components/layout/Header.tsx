'use client';

// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

const categories = [
  {
    name: 'Star-Casting',
    subcategories: [
      { title: 'Explore', items: ['Featured Stars', 'Rising Talents', 'Genres'] },
      { title: 'Services', items: ['Casting Calls', 'Talent Management', 'Star Workshops'] },
      { title: 'More from Star-Casting', items: ['Success Stories', 'Industry News', 'FAQs'] },
    ],
  },
  {
    name: 'Alpha',
    subcategories: [
      { title: 'Explore', items: ['What is Alpha?', 'How it Works', 'Pricing'] },
      { title: 'Features', items: ['Analytics', 'Campaign Management', 'Collaboration Tools'] },
      { title: 'Resources', items: ['Case Studies', 'Blog', 'Support'] },
    ],
  },
  {
    name: 'Brands',
    subcategories: [
      { title: 'Discover', items: ['Top Brands', 'Emerging Brands', 'Brand Categories'] },
      { title: 'Services', items: ['Brand Partnerships', 'Influencer Matching', 'Campaign Creation'] },
      { title: 'Resources', items: ['Brand Guidelines', 'Success Stories', 'Brand Protection'] },
    ],
  },
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
          <nav className="hidden md:flex space-x-4">
            {categories.map((category) => (
              <DropdownMenu.Root key={category.name}>
                <DropdownMenu.Trigger className="flex items-center text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {category.name} <ChevronDownIcon className="ml-1" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-white shadow-lg rounded-md p-4 w-56 mt-2">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.title} className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{subcategory.title}</h3>
                        <ul className="space-y-2">
                          {subcategory.items.map((item) => (
                            <li key={item}>
                              <Link href={`/${category.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
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
            <Link href="/login" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;