export interface playersDTO {
  name: string;
  born: Date;
  height: number;
  weight: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: string;
}


export interface playersCreateDTO {
  name: string;
  born: Date;
  height: number;
  weight: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: File;
}
