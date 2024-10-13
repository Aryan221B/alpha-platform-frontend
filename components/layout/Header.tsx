'use client';

// components/Header.tsx

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';
import { HamburgerMenuIcon, ChevronDownIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
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


const quickLinks = {
  name: 'Quick Links',
  columns: [
    {
      title: 'Popular Searches',
      items: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards'],
    },
    {
      title: 'Help',
      items: ['FAQs', 'Contact Us', 'Shipping', 'Returns'],
    },
  ],
};

const profileLinks = {
  name: 'Profile',
  columns: [
    {
      title: 'Account',
      items: ['My Profile', 'Orders', 'Wishlist', 'Settings'],
    },
    {
      title: 'Projects',
      items: ['Alpha+', 'Discount'],
    },
  ],
};

function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (category: string) => {
    setActiveCategory(category);
    setIsOpen(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
        setIsOpen(false);
        setActiveCategory('');
      }
    }, 200);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      header.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        header.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/og1.webp" alt="Logo" width={80} height={32} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3 items-center">
            {categories.map((category) => (
              <div
                key={category.name}
                onMouseEnter={() => handleMouseEnter(category.name)}
                className="relative"
              >
                <button 
                  className="text-white text-[16px] hover:text-gray-300 focus:outline-none transition-colors duration-200"
                >
                  {category.name}
                </button>
              </div>
            ))}
            {/* About Us Link */}
            <Link 
              href="/about-us" 
              className="text-white text-[16px] hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              About Us
            </Link>
          </nav>

          {/* Right-side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Popover.Root open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <Popover.Trigger asChild>
                <button 
                  className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="bg-black text-white shadow-lg w-screen left-0 right-0 mt-0 animate-fadeIn"
                  sideOffset={0}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center mb-4">
                      <input
                        type="text"
                        placeholder="Search Alpha.com"
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button className="ml-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
                        Search
                      </button>
                    </div>
                    <DropdownContent categories={[quickLinks]} activeCategory={quickLinks.name} />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <Popover.Root open={isProfileOpen} onOpenChange={setIsProfileOpen}>
              <Popover.Trigger asChild>
                <button 
                  className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
                  onClick={() => setIsProfileOpen(true)}
                >
                  <PersonIcon className="h-5 w-5" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="bg-black text-white shadow-lg w-64 mt-2 rounded-md animate-fadeIn"
                  sideOffset={5}
                  align="end"
                >
                  <div className="p-4">
                    <DropdownContent categories={[profileLinks]} activeCategory={profileLinks.name} />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute left-0 right-0 bg-black shadow-lg animate-fadeIn"
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <DropdownContent categories={categories.filter(cat => cat.name === activeCategory)} activeCategory={activeCategory} />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Accordion.Root type="single" collapsible>
          {categories.map((category) => (
            <Accordion.Item value={category.name} key={category.name}>
              <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-2 text-white text-[16px] hover:text-gray-300 transition-colors duration-200">
                {category.name}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="px-4 py-2">
                <DropdownContent categories={[category]} activeCategory={category.name} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
          {/* About Us Link in Mobile Menu */}
          <Link 
            href="/about-us" 
            className="block px-4 py-2 text-white text-[16px] hover:text-gray-300 transition-colors duration-200"
          >
            About Us
          </Link>
          <Accordion.Item value="search">
            <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-2 text-white text-[16px] hover:text-gray-300 transition-colors duration-200">
              Search
              <ChevronDownIcon className="h-5 w-5" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-2">
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search Alpha.com"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="ml-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
                  Search
                </button>
              </div>
              <DropdownContent categories={[quickLinks]} activeCategory={quickLinks.name} />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="profile">
            <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-2 text-white text-[16px] hover:text-gray-300 transition-colors duration-200">
              Profile
              <ChevronDownIcon className="h-5 w-5" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-2">
              <DropdownContent categories={[profileLinks]} activeCategory={profileLinks.name} />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </header>
  );
}

export default Header;
