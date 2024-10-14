import React from 'react';
import { Providers } from './providers';
import HeaderWrapper from '../components/layout/HeaderWrapper';
import Footer from '../components/layout/Footer';
import "./globals.css";

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
          <HeaderWrapper />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
