import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import * as Label from '@radix-ui/react-label';

const WorkPage: React.FC = () => {
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
            <Label.Root className="text-sm block">Toyota Global Olympics</Label.Root>
            <Label.Root className="text-2xl font-serif block">Upstream</Label.Root>
            
            {/* View Work Link */}
            <Link 
              href="/work/upstream" 
              className="mt-2 inline-block text-white bg-black hover:bg-white hover:text-black transition-colors duration-200 px-4 py-2"
            >
              View Work
            </Link>
          </div>

          {/* Existing Logo and Navigation Menu */}
          <Link href="/" className="absolute top-4 left-4 z-50">
            <Image src="/images/og1.webp" alt="Logo" width={80} height={32} />
          </Link>
        </div>
      </section>

      <Separator.Root className="bg-gray-200 h-px" />

      {/* Goldfish x Boban Hand Dish Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <Link href="/work/goldfish-boban" className="block mb-8">
            <div className="relative">
              <Image
                src="/images/goldfish-boban.jpg"
                alt="Goldfish x Boban Hand Dish"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <Label.Root className="text-sm block">Goldfish</Label.Root>
                <Label.Root className="text-2xl font-serif block">Goldfish x Boban Hand Dish</Label.Root>
              </div>
            </div>
          </Link>

          {/* Two Smaller Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Left Me For Pretzels', image: '/images/left-me-for-pretzels.jpg', link: '/work/left-me-for-pretzels' },
              { name: 'It’s A Tide Ad', image: '/images/its-a-tide-ad.jpg', link: '/work/its-a-tide-ad' },
            ].map((project) => (
              <Link key={project.name} href={project.link} className="block">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Label.Root className="text-sm block">{project.name.split(' ')[0]}</Label.Root>
                    <Label.Root className="text-2xl font-serif block">{project.name}</Label.Root>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
