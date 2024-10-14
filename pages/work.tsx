import React, { useState } from 'react';
import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Footer from '../components/layout/Footer';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

const WorkPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden">
          <AspectRatio.Root ratio={16 / 9} className="w-full h-full">
            <Image
              src="/images/hero-image.jpg"
              alt="Person holding snacks"
              layout="fill"
              objectFit="cover"
              priority
            />
          </AspectRatio.Root>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
          
          {/* Logo */}
          <Link href="/" className="absolute top-4 left-4 z-50">
            <Image src="/images/og1.webp" alt="Logo" width={80} height={32} />
          </Link>

          {/* Navigation Menu */}
          <div className="absolute top-4 right-4 flex items-center z-50">
            <nav className={`mr-4 ${isMenuOpen ? 'flex' : 'hidden'} space-x-6`}>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              <Link href="/about-us" className="text-white hover:text-gray-300">About Us</Link>
              <Link href="/work" className="text-white hover:text-gray-300">Work</Link>
              <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
              <Link href="/careers" className="text-white hover:text-gray-300">Careers</Link>
            </nav>
            
            {/* Hamburger Menu Icon */}
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <Cross1Icon className="h-10 w-10" />
              ) : (
                <HamburgerMenuIcon className="h-10 w-10" />
              )}
            </button>
          </div>

          <div className="absolute bottom-16 left-16 text-white">
            <h2 className="text-2xl font-semibold mb-2">Goldfish</h2>
            <h1 className="text-5xl font-bold">Goldfish x Boban Hand Dish</h1>
          </div>
        </div>

        {/* Rest of the content */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Our Work</h1>
          <p>Here you can showcase your company's projects and achievements.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
