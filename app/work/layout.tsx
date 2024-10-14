import React from 'react';
import Footer from '../../components/layout/Footer'; // Include Footer if desired

interface WorkLayoutProps {
  children: React.ReactNode;
}

const WorkLayout: React.FC<WorkLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default WorkLayout;