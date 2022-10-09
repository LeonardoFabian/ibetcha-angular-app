export interface postDTO {
  title: string;
  slug: string;
  content: string;
  image: string;
  postDate: Date;
  statusId: number;
}

export interface postCreateDTO {
  title: string;
  slug: string;
  content: string;
  image: File;
  postDate: Date;
  statusId: number;
}