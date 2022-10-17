export interface courtDTO {
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
}

export interface courtCreateDTO {
  name: string;
  photo: File;
  latitude: number;
  longitude: number;
}
