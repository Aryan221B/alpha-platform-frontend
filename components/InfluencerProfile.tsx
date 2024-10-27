'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import * as Form from '@radix-ui/react-form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Link {
  id: string;
  title: string;
  url: string;
  order: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  url: string;
  order: number;
}

interface InfluencerProfileProps {
  influencer: {
    id: string;
    name: string;
    profileImage: string;
    bio: string;
    industry: string[];
    links: Link[];
    products: Product[];
    newsletterEnabled: boolean;
    customStyles?: {
      backgroundColor?: string;
      textColor?: string;
      fontFamily?: string;
    };
  };
}

const InfluencerProfile: React.FC<InfluencerProfileProps> = ({ influencer }) => {
  const [links, setLinks] = useState(influencer.links);
  const [products, setProducts] = useState(influencer.products);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [activeTab, setActiveTab] = useState('links');

  const handleDragEnd = (result: any, type: 'links' | 'products') => {
    if (!result.destination) return;

    const items = type === 'links' ? [...links] : [...products];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    if (type === 'links') {
      setLinks(items);
    } else {
      setProducts(items);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div 
      className="container mx-auto px-4 py-8"
      style={{
        backgroundColor: influencer.customStyles?.backgroundColor,
        color: influencer.customStyles?.textColor,
        fontFamily: influencer.customStyles?.fontFamily
      }}
    >
      {/* Profile Header */}
      <div className="flex items-center mb-8">
        <Image
          src={influencer.profileImage}
          alt={influencer.name}
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="ml-6">
          <h1 className="text-4xl font-bold">{influencer.name}</h1>
          <p className="text-xl mt-2">{influencer.bio}</p>
          <div className="flex gap-2 mt-2">
            {influencer.industry.map((tag) => (
              <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs.Root defaultValue="links" className="mt-8">
        <Tabs.List className="flex border-b mb-4">
          <Tabs.Trigger value="links" className="px-4 py-2 hover:bg-gray-100">
            Links
          </Tabs.Trigger>
          <Tabs.Trigger value="products" className="px-4 py-2 hover:bg-gray-100">
            Products
          </Tabs.Trigger>
          {influencer.newsletterEnabled && (
            <Tabs.Trigger value="newsletter" className="px-4 py-2 hover:bg-gray-100">
              Newsletter
            </Tabs.Trigger>
          )}
        </Tabs.List>

        <Tabs.Content value="links">
          <DragDropContext onDragEnd={(result) => handleDragEnd(result, 'links')}>
            <Droppable droppableId="links">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {links.map((link, index) => (
                    <Draggable key={link.id} draggableId={link.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 mb-2 rounded-lg shadow hover:shadow-md transition-shadow"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                          </a>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Tabs.Content>

        <Tabs.Content value="products">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-xl font-bold mt-2">${product.price}</p>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-black text-white py-2 rounded hover:bg-gray-800"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        {influencer.newsletterEnabled && (
          <Tabs.Content value="newsletter">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Subscribe to my Newsletter</h2>
              <Form.Root onSubmit={handleNewsletterSubmit}>
                <Form.Field name="email">
                  <Form.Control asChild>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded"
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                  <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Subscribe
                  </button>
                </Form.Submit>
              </Form.Root>
            </div>
          </Tabs.Content>
        )}
      </Tabs.Root>
    </div>
  );
};

export default InfluencerProfile;
