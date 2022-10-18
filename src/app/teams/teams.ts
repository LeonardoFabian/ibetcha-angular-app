export interface teamsDTO {
  id: number;
  name: string;
  shortName: string;
  courtId: number;
  countryId: number;
  sportId: number;
  leagueId: number;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
}

export interface teamsCreateDTO {
  name: string;
  shortName: string;
  courtId: number;
  countryId: number;
  sportId: number;
  leagueId: number;
  primaryColor: string;
  secondaryColor: string;
  logo: File;
}
