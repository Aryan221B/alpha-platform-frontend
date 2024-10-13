'use client';

// components/Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';
import { HamburgerMenuIcon, ChevronDownIcon } from '@radix-ui/react-icons';
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
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const preventFocus = (e: React.MouseEvent) => {
    e.preventDefault();
  };

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
          <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <nav className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <Popover.Trigger
                  key={category.name}
                  asChild
                  onMouseEnter={() => {
                    setActiveCategory(category.name);
                    setIsOpen(true);
                  }}
                  onMouseDown={preventFocus}
                >
                  <button className={`text-white hover:text-gray-300 px-3 py-2 text-base font-medium focus:outline-none relative group no-border ${activeCategory === category.name ? 'text-gray-300' : ''}`}>
                    {category.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-out ${activeCategory === category.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </button>
                </Popover.Trigger>
              ))}
            </nav>

            <Popover.Portal>
              <Popover.Content
                className="bg-black text-white shadow-lg w-screen left-0 right-0 mt-0 animate-fadeIn no-border"
                sideOffset={0}
                onMouseLeave={() => setIsOpen(false)}
                onMouseDown={preventFocus}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 no-border">
                  <DropdownContent categories={categories} activeCategory={activeCategory} />
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Accordion.Root type="single" collapsible>
          {categories.map((category) => (
            <Accordion.Item value={category.name} key={category.name}>
              <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-2 text-white hover:bg-gray-800">
                {category.name}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="px-4 py-2">
                <DropdownContent categories={[category]} activeCategory={category.name} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </header>
  );
}

export default Header;
