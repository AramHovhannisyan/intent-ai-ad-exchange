export interface GeoTypes {
  lat: 28,
  lon: 14,
  country: string,
  region: string,
  metro: string,
  city: string,
  zip: string
}

export interface BidRequestType {
  id: string,
  imp: [
    { id: string, banner: { w: number, h: number, format: [], id: string, pos: string }, ext: any },
    { id: string, banner: { w: number, h: number, format: [], id: string, pos: string }, ext: any }
  ],
  device: {
    ua: string,
    geo: GeoTypes,
    ip: string,
    devicetype: 2,
    os: string
  },
  user: { id: string },
  at: 0,
  bcat: [ string ]
}

export interface bidResponseType {
  id: string,
  bid: number
  ad: string | null,
}
