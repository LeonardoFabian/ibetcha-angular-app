export interface postDTO {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  postDate: Date;
  statusId: number;
}

export interface postCreateDTO {
  title: string;
  slug: string;
  content: string;
  featuredImage: File;
  postDate: Date;
  statusId: number;
}