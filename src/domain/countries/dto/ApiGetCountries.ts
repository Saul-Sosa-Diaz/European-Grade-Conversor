export type APIGetCountries = APICountry[]

export enum APIEvaluationType {
  CONTINOUOS = 'continous',
  DISCRETE = 'discrete',
}

export interface APICountry {
  countryid: string
  countrycode: string
  countryname: string
  universityid: string
  universityname: string
  evaluationsystemname: string
  validgrades: string[]
  evaluationtype: APIEvaluationType
}
