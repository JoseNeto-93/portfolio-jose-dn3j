export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}