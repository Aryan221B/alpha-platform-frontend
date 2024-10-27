import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Separator from '@radix-ui/react-separator';

const menuItems = [
  { name: 'Work', href: '/work' },
  { name: 'About Us', href: '/about-us' },
  { name: 'News', href: '/news' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenu.Root
      className="relative z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavigationMenu.List>
        <NavigationMenu.Item>
          {/* Hamburger Trigger */}
          <NavigationMenu.Trigger
            className="cursor-pointer p-2 outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                className="w-full h-0.5 bg-black block"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black block"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black block"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </div>
          </NavigationMenu.Trigger>

          {/* Dropdown Content */}
          <NavigationMenu.Content
            className="absolute right-0 mt-2 min-w-[220px] bg-white rounded-md shadow-lg"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {menuItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <NavigationMenu.Link asChild>
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors duration-150 data-[active]:bg-gray-100 data-[active]:text-black"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenu.Link>
                      {index < menuItems.length - 1 && (
                        <Separator.Root className="h-px bg-gray-100 mx-3" />
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* Viewport for animations */}
      <NavigationMenu.Viewport className="absolute top-full right-0 w-full" />
    </NavigationMenu.Root>
  );
};

export default HamburgerMenu;
