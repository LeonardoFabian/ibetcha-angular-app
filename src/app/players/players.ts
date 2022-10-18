export interface playersDTO {
  name: string;
  born: Date;
  heightId: number;
  weightId: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: string;
}


export interface playersCreateDTO {
  name: string;
  born: Date;
  heightId: number;
  weightId: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: File;
}
