export interface teamsDTO {
  name: string;
  shortName: string;
  courtId: number;
  countryId: number;
  sportId: number;
  leagueId: number;
  colorPrimary: string;
  colorSecondary: string;
  logo: string;
}

export interface teamsCreateDTO {
  name: string;
  shortName: string;
  courtId: number;
  countryId: number;
  sportId: number;
  leagueId: number;
  colorPrimary: string;
  colorSecondary: string;
  logo: File;
}
