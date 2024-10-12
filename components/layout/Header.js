// components/Header.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, Cross2Icon, ChevronDownIcon } from '@radix-ui/react-icons';

const categories = [
  { name: 'Fashion', href: '/category/fashion' },
  { name: 'Beauty', href: '/category/beauty' },
  { name: 'Tech', href: '/category/tech' },
  { name: 'Lifestyle', href: '/category/lifestyle' },
  { name: 'Travel', href: '/category/travel' },
];

function Header() {
  return (
    <header className="bg-background shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image src="/images/og1.webp" alt="Logo" width={128} height={32} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-foreground hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/influencers" className="text-foreground hover:text-blue-600 transition-colors">Influencers</Link>
          <Link href="/brands" className="text-foreground hover:text-blue-600 transition-colors">Brands</Link>
          
          {/* Categories Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center text-foreground hover:text-blue-600 transition-colors">
              Categories <ChevronDownIcon className="ml-1" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-background shadow-md rounded-md p-2 w-48">
                {categories.map((category) => (
                  <DropdownMenu.Item key={category.name} className="focus:outline-none">
                    <Link href={category.href} className="block px-4 py-2 text-foreground hover:bg-blue-100 rounded transition-colors">
                      {category.name}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <Link href="/about" className="text-foreground hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/support" className="text-foreground hover:text-blue-600 transition-colors">Support</Link>
        </nav>

        {/* Authentication Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-foreground hover:text-blue-600 transition-colors">Login</Link>
          <Link href="/signup" className="bg-blue-600 text-background px-4 py-2 rounded hover:bg-blue-700 transition-colors">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <Dialog.Root>
          <Dialog.Trigger asChild className="lg:hidden">
            <button className="p-2" aria-label="Open menu">
              <HamburgerMenuIcon className="w-6 h-6 text-foreground" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed right-0 top-0 h-full w-[80%] max-w-[400px] bg-background p-6 shadow-lg">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-foreground hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/influencers" className="text-foreground hover:text-blue-600 transition-colors">Influencers</Link>
                <Link href="/brands" className="text-foreground hover:text-blue-600 transition-colors">Brands</Link>
                <Link href="/about" className="text-foreground hover:text-blue-600 transition-colors">About Us</Link>
                <Link href="/support" className="text-foreground hover:text-blue-600 transition-colors">Support</Link>
                
                {/* Categories in Mobile Menu */}
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Categories</h3>
                  {categories.map((category) => (
                    <Link key={category.name} href={category.href} className="block py-2 text-foreground hover:text-blue-600 transition-colors">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href="/login" className="text-foreground hover:text-blue-600 transition-colors">Login</Link>
                <Link href="/signup" className="bg-blue-600 text-background px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors">Sign Up</Link>
              </div>
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 p-2" aria-label="Close menu">
                  <Cross2Icon className="w-6 h-6 text-foreground" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

export default Header;
