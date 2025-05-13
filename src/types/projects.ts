export interface Project {
  id: number;
  documentId: string;
  name: string;
  description: string;
  body: string;
  link: Link[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Link {
  id: number;
  label: string;
  url: string;
}