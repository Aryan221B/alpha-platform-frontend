import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'lucide-react';

interface Link {
  id: string;
  title: string;
  url: string;
  active: boolean;
}

const LinksManager = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [isAddingLink, setIsAddingLink] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLinks(items);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Links</h2>
        <button
          onClick={() => setIsAddingLink(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus size={16} />
          Add Link
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="links">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {links.map((link, index) => (
                <Draggable key={link.id} draggableId={link.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center justify-between p-4 bg-white border rounded-md"
                    >
                      <div>
                        <h3 className="font-medium">{link.title}</h3>
                        <p className="text-sm text-gray-500">{link.url}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {/* Toggle active state */}}
                          className={`px-3 py-1 rounded-md ${
                            link.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {link.active ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => {/* Edit link */}}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {/* Delete link */}}
                          className="text-red-500 hover:text-red-600"
                        >
                          Delete
                        </button>
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

      <Dialog.Root open={isAddingLink} onOpenChange={setIsAddingLink}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-lg font-semibold mb-4">
              Add New Link
            </Dialog.Title>
            {/* Add link form */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default LinksManager;

