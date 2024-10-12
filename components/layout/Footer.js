// components/Footer.js

import React from 'react';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';

function Footer({
  backgroundColor = 'bg-gray-900',
  textColor = 'text-white',
  accentColor = 'text-blue-400',
  logo,
  companyName = 'Our Platform',
  tagline = 'Connecting Brands with Influencers Seamlessly.',
  navLinks = [
    { href: '/', label: 'Home' },
    { href: '/influencers', label: 'Influencers' },
    { href: '/brands', label: 'Brands' },
    { href: '/about', label: 'About Us' },
  ],
  legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
  socialLinks = [
    { href: '#', icon: 'facebook' },
    { href: '#', icon: 'twitter' },
    { href: '#', icon: 'instagram' },
  ],
}) {
  const linkClass = `${textColor} hover:${accentColor} transition-colors duration-200`;

  return (
    <footer className={`${backgroundColor} ${textColor} mt-12`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {logo ? (
                <img src={logo} alt={companyName} className="h-8" />
              ) : (
                <div className={`w-32 h-8 ${accentColor} rounded`}></div>
              )}
            </Link>
            <p className="text-gray-400">{tagline}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className={`${linkClass} w-8 h-8 flex items-center justify-center rounded-full border border-current`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.icon}</span>
                  {/* Replace with actual icons */}
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
