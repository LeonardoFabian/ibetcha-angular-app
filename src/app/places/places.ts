export interface placeDTO {
  name: string;
  photo: string;
  latitude: number;
  longitude: number;
}

export interface placeCreateDTO {
  name: string;
  photo: File;
  latitude: number;
  longitude: number;
}