'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Link as LinkIcon, Package, Image, Mail, Settings } from 'lucide-react';

const DashboardNav = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/dashboard/links', label: 'Links', icon: LinkIcon },
    { href: '/dashboard/products', label: 'Products', icon: Package },
    { href: '/dashboard/media', label: 'Media', icon: Image },
    { href: '/dashboard/newsletter', label: 'Newsletter', icon: Mail },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="w-64 bg-white h-screen border-r">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 ${
            pathname === href ? 'bg-gray-50 border-r-4 border-blue-500' : ''
          }`}
        >
          <Icon className="w-5 h-5 mr-3" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
