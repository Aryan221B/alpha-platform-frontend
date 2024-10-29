'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  ShoppingBag, 
  Mail,
  BarChart2, 
  Settings 
} from 'lucide-react';

const InfluencerSidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard/influencer', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/influencer/links', label: 'Links', icon: LinkIcon },
    { href: '/dashboard/influencer/products', label: 'Products', icon: ShoppingBag },
    { href: '/dashboard/influencer/newsletter', label: 'Newsletter', icon: Mail },
    { href: '/dashboard/influencer/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/dashboard/influencer/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Creator Dashboard</h1>
      </div>
      <nav className="mt-6">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 ${
                pathname === link.href ? 'bg-gray-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default InfluencerSidebar;
