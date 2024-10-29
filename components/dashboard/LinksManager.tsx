import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { Plus, Search, FolderPlus, QrCode, BarChart2 } from 'lucide-react';

interface Link {
  id: string;
  title: string;
  url: string;
  active: boolean;
  category?: string;
  clicks: number;
  createdAt: Date;
  lastClicked?: Date;
}

interface Category {
  id: string;
  name: string;
}

const LinksManager = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mock data - Replace with actual API calls
  useEffect(() => {
    setLinks([
      {
        id: '1',
        title: 'Portfolio Website',
        url: 'https://example.com/portfolio',
        active: true,
        category: 'Professional',
        clicks: 145,
        createdAt: new Date(),
        lastClicked: new Date(),
      },
      // Add more mock links
    ]);

    setCategories([
      { id: '1', name: 'Professional' },
      { id: '2', name: 'Social Media' },
      { id: '3', name: 'Personal' },
    ]);
  }, []);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinks(items);
  };

  const filteredLinks = links.filter(link => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         link.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Overview Panel */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Total Links</h3>
          <p className="text-2xl font-bold">{links.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium">Total Clicks</h3>
          <p className="text-2xl font-bold">
            {links.reduce((sum, link) => sum + link.clicks, 0)}
          </p>
        </div>
        {/* Add more stats */}
      </div>

      {/* Actions Bar */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search links..."
              className="pl-10 pr-4 py-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="border rounded-md px-4 py-2"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsAddingLink(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <Plus size={16} />
            Add Link
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <FolderPlus size={16} />
            New Category
          </button>
        </div>
      </div>

      {/* Links List */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {filteredLinks.map((link, index) => (
                <Draggable key={link.id} draggableId={link.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center justify-between p-4 bg-white border rounded-md"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{link.title}</h3>
                        <p className="text-sm text-gray-500">{link.url}</p>
                        {link.category && (
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {link.category}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500">
                          {link.clicks} clicks
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-md">
                            <QrCode size={16} />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-md">
                            <BarChart2 size={16} />
                          </button>
                          <button
                            className={`px-3 py-1 rounded-md ${
                              link.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {link.active ? 'Active' : 'Inactive'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add Link Dialog */}
      <Dialog.Root open={isAddingLink} onOpenChange={setIsAddingLink}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-lg font-semibold mb-4">
              Add New Link
            </Dialog.Title>
            {/* Add link form */}
            <form className="space-y-4">
              {/* Form fields */}
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default LinksManager;

