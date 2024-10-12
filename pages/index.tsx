import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Innovative Design Co.</title>
        <meta name="description" content="Welcome to Innovative Design Co. - Pushing boundaries in creativity and technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/hero-image.jpg"
            alt="Creative workspace"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4">Redefining Creativity</h1>
            <p className="text-xl mb-8">Where innovation meets design</p>
            <Link href="/work" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Explore Our Work
            </Link>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['Branding', 'Web Design', 'Digital Marketing'].map((service) => (
                <div key={service} className="bg-black p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to start your project?</h2>
            <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Get in Touch
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={`/project-${item}.jpg`}
                    alt={`Project ${item}`}
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <Link href={`/work/${item}`} className="text-white text-lg font-semibold">
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Innovative Design Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
