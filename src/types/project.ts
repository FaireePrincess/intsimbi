export type ProjectCategory = "Structural Steel" | "Stainless Steel" | "Metal Work";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  gallery: string[];
  featured?: boolean;
}
