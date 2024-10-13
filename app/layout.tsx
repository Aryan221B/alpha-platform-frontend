import React from 'react';
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import "./globals.css";
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

export const metadata: Metadata = {
  title: "ALPHA - Connecting Influencers and Brands",
  description: "The ultimate marketplace for influencers and brands to collaborate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
