export interface CampainGeoTypes {
  country: string,
  region: string
}

export interface CampaignType{
  id: string,
  name: string,
  targeting: {
    geo: CampainGeoTypes,
    bcat: [string]
  }
}