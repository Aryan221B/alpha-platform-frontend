'use client';

import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Dialog from '@radix-ui/react-dialog';
import { Plus, Search } from 'lucide-react';

export default function LinksManager() {
  const [links, setLinks] = useState([]);
  const [isAddingLink, setIsAddingLink] = useState(false);

  // Fetch links
  useEffect(() => {
    // Replace with your API call
    const fetchLinks = async () => {
      // Mock data
      setLinks([
        { id: '1', title: 'My Website', url: 'https://example.com' }
      ]);
    };

    fetchLinks();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Links</h1>
        <button
          onClick={() => setIsAddingLink(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          <Plus className="w-4 h-4" />
          Add Link
        </button>
      </div>

      {/* Links list */}
      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="p-4 bg-white rounded-lg shadow">
            <h3>{link.title}</h3>
            <p className="text-gray-500">{link.url}</p>
          </div>
        ))}
      </div>

      {/* Add Link Dialog */}
      <Dialog.Root open={isAddingLink} onOpenChange={setIsAddingLink}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-full max-w-md">
            <Dialog.Title className="text-lg font-bold mb-4">
              Add New Link
            </Dialog.Title>
            {/* Add form fields here */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

