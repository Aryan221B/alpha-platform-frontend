// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';
import {TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon} from '@radix-ui/react-icons';

interface FooterProps {
  logo?: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Logo & Tagline */}
          {logo && <img src={logo} alt="Logo" className="mb-4" />}
          <p className="text-lg mb-4">Let&apos;s Talk</p>
          <Link href="/contact" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
            Contact Us
          </Link>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Work', 'About Us', 'News', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gray-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Addresses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
            <ul className="space-y-4">
              {['New York', 'Dallas', 'Los Angeles'].map((city) => (
                <li key={city}>
                  <h4 className="font-semibold">{city}</h4>
                  <p>123 Main St, Suite 100</p>
                  <p>{city}, State 12345</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-gray-300 transition-colors"><FacebookLogoIcon className="w-6 h-6" /></a> */}
              <a href="#" className="hover:text-gray-300 transition-colors"><TwitterLogoIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><LinkedInLogoIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-300 transition-colors"><InstagramLogoIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <Separator.Root className="bg-gray-600 h-px my-8" />

        {/* Legal Links */}
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            <div className="space-x-4">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
