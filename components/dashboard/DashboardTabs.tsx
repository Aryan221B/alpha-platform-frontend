import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import LinksManager from './LinksManager';
import ProductsManager from './ProductsManager';
import MediaManager from './MediaManager';
import NewsletterManager from './NewsletterManager';
import SettingsManager from './SettingsManager';

const DashboardTabs = () => {
  return (
    <Tabs.Root defaultValue="links" className="bg-white rounded-lg shadow-sm">
      <Tabs.List className="flex border-b border-gray-200">
        <Tabs.Trigger
          value="links"
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500"
        >
          Links
        </Tabs.Trigger>
        <Tabs.Trigger
          value="products"
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500"
        >
          Products
        </Tabs.Trigger>
        <Tabs.Trigger
          value="media"
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500"
        >
          Media
        </Tabs.Trigger>
        <Tabs.Trigger
          value="newsletter"
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500"
        >
          Newsletter
        </Tabs.Trigger>
        <Tabs.Trigger
          value="settings"
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500"
        >
          Settings
        </Tabs.Trigger>
      </Tabs.List>

      <div className="p-6">
        <Tabs.Content value="links">
          <LinksManager />
        </Tabs.Content>
        <Tabs.Content value="products">
          <ProductsManager />
        </Tabs.Content>
        <Tabs.Content value="media">
          <MediaManager />
        </Tabs.Content>
        <Tabs.Content value="newsletter">
          <NewsletterManager />
        </Tabs.Content>
        <Tabs.Content value="settings">
          <SettingsManager />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default DashboardTabs;

