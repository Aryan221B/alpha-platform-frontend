// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';
import {TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon} from '@radix-ui/react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Alpha</h3>
            <p className="text-sm">Innovative solutions for a better future.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-gray-300 transition-colors duration-200">Home</Link></li>
              <li><Link href="/work" className="text-sm hover:text-gray-300 transition-colors duration-200">Work</Link></li>
              <li><Link href="/about-us" className="text-sm hover:text-gray-300 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/news" className="text-sm hover:text-gray-300 transition-colors duration-200">News</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-gray-300 transition-colors duration-200">Careers</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gray-300 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Tech Street</p>
            <p className="text-sm">San Francisco, CA 94105</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@alpha.com</p>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/alpha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com/alpha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com/alpha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com/company/alpha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://youtube.com/alpha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright notice */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Alpha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
