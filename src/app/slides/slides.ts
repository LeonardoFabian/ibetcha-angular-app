export interface slideDTO {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  linkTargetId: number;
  styleId: number;
}

export interface slideCreationDTO {
  title: string;
  description: string;
  image: File;
  link: string;
  linkText: string;
  linkTargetId: number;
  styleId: number;
}
