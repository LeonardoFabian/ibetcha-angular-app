export interface takeBetDTO {
  teamId: number;
  homeTeamId: number;
  awayTeamId: number;
  betTypeId: number;
  pointSpreadValue: number;
  betTypeOptionId: number;
  modalityId: number;
  amount: number;
  disclosureAccepted: boolean;
}

export interface makeBetDTO {
  teamId: number;
  homeTeamId: number;
  awayTeamId: number;
  betTypeId: number;
  pointSpreadValue: number;
  betTypeOptionId: number;
  modalityId: number;
  amount: number;
  disclosureAccepted: boolean;
}
