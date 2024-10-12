import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li><Link href="/work" className="text-lg font-semibold hover:text-blue-600">Work</Link></li>
            <li><Link href="/about" className="text-lg font-semibold hover:text-blue-600">About Us</Link></li>
            <li><Link href="/news" className="text-lg font-semibold hover:text-blue-600">News</Link></li>
            <li><Link href="/careers" className="text-lg font-semibold hover:text-blue-600">Careers</Link></li>
            <li><Link href="/contact" className="text-lg font-semibold hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </header>

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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">ALPHA Platform</h3>
              <p>Connecting influencers and brands worldwide.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Office Locations</h4>
              <ul>
                <li>New York</li>
                <li>London</li>
                <li>Tokyo</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-blue-600"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white hover:text-pink-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white hover:text-blue-800"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 ALPHA Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
