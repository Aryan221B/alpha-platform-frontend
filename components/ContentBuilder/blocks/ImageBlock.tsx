import React from 'react';
import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import type { ImageBlock } from '@/types/content';

interface ImageBlockProps {
  block: ImageBlock;
  isEditing?: boolean;
}

export default function ImageBlock({ block, isEditing }: ImageBlockProps) {
  const aspectRatioMap = {
    '16:9': 16 / 9,
    '4:3': 4 / 3,
    '1:1': 1,
  };

  return (
    <div className="relative">
      <AspectRatio.Root ratio={aspectRatioMap[block.aspectRatio || '16:9']}>
        <Image
          src={block.url}
          alt={block.alt}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio.Root>
      {block.caption && (
        <p className="mt-2 text-sm text-gray-500 text-center">{block.caption}</p>
      )}
    </div>
  );
}

