import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to ALPHA Platform</h1>
            <p className="text-xl mb-8">Connecting Influencers and Brands</p>
            <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </Link>
          </div>
        </section>

        <Separator.Root className="bg-gray-200 h-px" />

        {/* Featured Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={`/images/project-${project}.jpg`} alt={`Project ${project}`} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                    <p className="text-gray-600 mb-4">Brief description of the project and its impact.</p>
                    <Link href={`/project/${project}`} className="text-blue-600 hover:underline">Learn More</Link>
                  </div>
                </div>
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
      </main>
    </div>
  );
}