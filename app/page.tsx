import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen relative">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to ALPHA Platform</h1>
          <p className="text-xl mb-8">Connecting Influencers and Brands</p>
          <Link href="/profile/sign-up" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>

      <Separator.Root className="bg-gray-200 h-px" />
{/* Featured Projects Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
    
    {/* Main Featured Project */}
    <Link href="/work/upstream" className="block mb-8">
      <div className="relative">
        <Image
          src="/images/hero-image.jpg"
          alt="Toyota Global Olympics"
          width={1000}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-sm block">Toyota Global Olympics</span>
          <span className="text-2xl font-serif block">Upstream</span>
        </div>
      </div>
    </Link>

    {/* Three Smaller Projects */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: 'Goldfish x Boban', image: '/images/goldfish-boban.jpg', link: '/work/goldfish-boban', client: 'Goldfish' },
        { name: 'Left Me For Pretzels', image: '/images/left-me-for-pretzels.jpg', link: '/work/left-me-for-pretzels', client: 'Pretzels' },
        { name: "It's A Tide Ad", image: '/images/its-a-tide-ad.jpg', link: '/work/its-a-tide-ad', client: 'Tide' },
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
              <span className="text-sm block">{project.client}</span>
              <span className="text-2xl font-serif block">{project.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      <Separator.Root className="bg-gray-200 h-px" />

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-xl text-center mb-12">We are a platform dedicated to connecting influencers with brands for impactful collaborations.</p>
          <div className="text-center">
            <Link href="/about" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}