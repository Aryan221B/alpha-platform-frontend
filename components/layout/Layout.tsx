import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
