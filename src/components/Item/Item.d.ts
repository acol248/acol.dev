type Image = {
  src: string;
  alt: string;
};

interface ItemProps {
  className?: string;
  title: string;
  description: string;
  body?: React.ReactNode;
  images?: Array<Image>;
  links?: Array<{ label: string; url: string, icon?: string }>;
}

export type { ItemProps };
