import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { PlusIcon } from '@radix-ui/react-icons';
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import VideoBlock from './blocks/VideoBlock';
import AddContentDialog from './AddContentDialog';
import type { ContentBlock } from '@/types/content';

interface ContentBuilderProps {
  content: ContentBlock[];
  onContentChange: (content: ContentBlock[]) => void;
  isEditing?: boolean;
}

export default function ContentBuilder({ content, onContentChange, isEditing = false }: ContentBuilderProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(content);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onContentChange(items.map((item, index) => ({ ...item, order: index })));
  };

  const renderBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'text':
        return <TextBlock block={block} isEditing={isEditing} />;
      case 'image':
        return <ImageBlock block={block} isEditing={isEditing} />;
      case 'video':
        return <VideoBlock block={block} isEditing={isEditing} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="content">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {content.map((block, index) => (
                <Draggable
                  key={block.id}
                  draggableId={block.id}
                  index={index}
                  isDragDisabled={!isEditing}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-6"
                    >
                      {renderBlock(block)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {isEditing && (
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger asChild>
            <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <PlusIcon className="mx-auto h-6 w-6 text-gray-400" />
            </button>
          </Dialog.Trigger>
          <AddContentDialog onAdd={(newBlock) => {
            onContentChange([...content, { ...newBlock, order: content.length }]);
            setIsDialogOpen(false);
          }} />
        </Dialog.Root>
      )}
    </div>
  );
}

