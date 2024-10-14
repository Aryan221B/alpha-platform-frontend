import React, { useState, useRef } from 'react';
import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Link from 'next/link';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import * as Separator from '@radix-ui/react-separator';
import * as Label from '@radix-ui/react-label';


const WorkPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMenuOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
      setIsHovered(false);
    }, 200);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen relative -mt-16">
        <div className="relative w-full h-full overflow-hidden">
          <AspectRatio.Root ratio={16 / 9} className="w-full h-full">
            <Image
              src="/images/hero-image.jpg"
              alt="Person holding snacks"
              fill
              className="object-cover"
              priority
            />
          </AspectRatio.Root>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 z-50 text-white">
            <Label.Root className="text-sm block">Global Olympics</Label.Root>
            <Label.Root className="text-2xl font-serif block">Upstream x Olympics</Label.Root>
          </div>

          {/* Logo */}
          <Link href="/" className="absolute top-4 left-4 z-50">
            <Image src="/images/og1.webp" alt="Logo" width={80} height={32} />
          </Link>

          {/* Navigation Menu */}
          <div 
            className="absolute top-4 right-4 flex items-center z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <nav className={`mr-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} space-x-6`}>
              <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-200">Home</Link>
              <Link href="/about-us" className="text-white hover:text-gray-300 transition-colors duration-200">About Us</Link>
              <Link href="/work" className="text-white hover:text-gray-300 transition-colors duration-200">Work</Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">Contact</Link>
              <Link href="/careers" className="text-white hover:text-gray-300 transition-colors duration-200">Careers</Link>
            </nav>
            
            {/* Hamburger Menu Icon */}
            <button 
              className="text-white p-2 rounded-full transition-colors duration-200 hover:bg-white hover:bg-opacity-20"
            >
              {isHovered ? (
                <Cross1Icon className="h-10 w-10 transition-transform duration-200 transform rotate-0 hover:rotate-90" />
              ) : (
                <HamburgerMenuIcon className="h-10 w-10 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </section>

      <Separator.Root className="bg-gray-200 h-px" />

      {/* Additional Sections */}
      {/* Future sections can be added here */}
    </>
  );
};

export default WorkPage;
