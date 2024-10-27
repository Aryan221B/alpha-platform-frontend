import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { menuVariants, itemVariants } from './menuVariants';

const menuItems = [
  { name: 'Work', href: '/work' },
  { name: 'About Us', href: '/about-us' },
  { name: 'News', href: '/news' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Hamburger/Cross Icon */}
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
        <div className="relative w-6 h-6">
          <motion.span
            className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"
            animate={isOpen ? {
              rotate: 45,
              y: 0
            } : {
              rotate: 0,
              y: -4
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"
            animate={isOpen ? {
              opacity: 0
            } : {
              opacity: 1
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute top-1/2 left-0 w-6 h-0.5 bg-black transform -translate-y-1/2"
            animate={isOpen ? {
              rotate: -45,
              y: 0
            } : {
              rotate: 0,
              y: 4
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <motion.div className="py-2">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
