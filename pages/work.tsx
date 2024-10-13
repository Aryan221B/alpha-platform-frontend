import React from 'react';
import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const WorkPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
