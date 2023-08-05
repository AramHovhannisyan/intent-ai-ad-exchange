export interface CampaignGeoTypes {
  country: string,
  region: string
}

export interface CampaignType{
  id: string,
  name: string,
  targeting: {
    geo: CampaignGeoTypes,
    bcat: [string]
  }
}