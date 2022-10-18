export interface leagueDTO {
  id: number;
  name: string;
  shortName: string;
  countryId: number;
  sportId: number;
  logo: string;
}

export interface leagueCreateDTO {
  name: string;
  shortName: string;
  countryId: number;
  sportId: number;
  logo: File;
}
