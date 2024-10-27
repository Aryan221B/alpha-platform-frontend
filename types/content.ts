interface BaseContentBlock {
  id: string;
  type: 'text' | 'image' | 'video';
  order: number;
}

interface TextBlock extends BaseContentBlock {
  type: 'text';
  content: string;
  styling?: {
    fontSize?: string;
    fontWeight?: string;
    textAlign?: 'left' | 'center' | 'right';
    color?: string;
  };
}

interface ImageBlock extends BaseContentBlock {
  type: 'image';
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

interface VideoBlock extends BaseContentBlock {
  type: 'video';
  url: string;
  thumbnail?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export type ContentBlock = TextBlock | ImageBlock | VideoBlock;

