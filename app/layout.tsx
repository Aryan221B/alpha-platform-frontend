import type { Metadata } from "next";
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import "./globals.css";
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

export const metadata: Metadata = {
  title: "ALPHA Platform - Connecting Influencers and Brands",
  description: "The ultimate marketplace for influencers and brands to collaborate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer logo="/path/to/your/logo.png" />
        </Providers>
      </body>
    </html>
  );
}
