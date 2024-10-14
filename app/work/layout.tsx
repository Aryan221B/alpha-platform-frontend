import React from 'react';

interface WorkLayoutProps {
  children: React.ReactNode;
}

const WorkLayout: React.FC<WorkLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default WorkLayout;
