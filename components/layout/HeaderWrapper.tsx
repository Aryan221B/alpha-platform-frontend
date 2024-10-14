'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';

const HeaderWrapper: React.FC = () => {
  const pathname = usePathname();

  // Define paths where Header should be excluded
  const excludedPaths = ['/work'];

  if (excludedPaths.includes(pathname)) {
    return null; // Do not render Header on excluded paths
  }

  return <Header />;
};

export default HeaderWrapper;

