export interface playersDTO {
  name: string;
  birthday: Date;
  height: number;
  weight: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: string;
}


export interface playersCreateDTO {
  name: string;
  birthday: Date;
  height: number;
  weight: number;
  sportId: number;
  teamId: number;
  number: number;
  photo: File;
}
