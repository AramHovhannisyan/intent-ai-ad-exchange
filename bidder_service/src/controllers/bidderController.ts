import { Request, Response, NextFunction } from 'express';
import blockedCategories from '../data/blockedCategories';
import { getAll } from '../services/campaignsService';
import { BidRequestType, GeoTypes, bidResponseType } from '../types/BidRequestType';
import { CampainGeoTypes } from '../types/CampaignTypes';

const campaigns = getAll();

const answerToAdEx = async (req: Request, res: Response, next: NextFunction) => {
  const bidRequest: BidRequestType = req.body;
  const bidResponse = await generateBidResponse(bidRequest);

  return res.json(bidResponse);
};

async function generateBidResponse(bidRequest: BidRequestType) {
  const bidResponse: bidResponseType = {
    id: bidRequest.id,
    bid: 0, // Default bid amount set to 0
    ad: null, // Default ad creative URL set to null
  };

  // Check if any blocked category is present in the bid request's bcat array
  const hasBlockedCategory = bidRequest.bcat.some((category) => blockedCategories.includes(category));

  if (!hasBlockedCategory) {
    // Find the matching campaign based on targeting criteria
    const matchedCampaign = campaigns.find((campaign) => {
      // Check if the bid request meets the campaign's targeting criteria
      const geoMatch = matchGeo(bidRequest.device.geo, campaign.targeting.geo);
      const bcatMatch = matchBlockedCategories(bidRequest.bcat, campaign.targeting.bcat);
      return geoMatch && bcatMatch;
    });

    if (matchedCampaign) {
      // If a matching campaign is found, set the bid amount and ad creative URL
      bidResponse.bid = 0.1;
      bidResponse.ad = `https://example.com/ads/${matchedCampaign.id}.jpg`;
    }
  }

  console.log(bidResponse);

  return bidResponse;
}

function matchGeo(bidRequestGeo: GeoTypes, campaignGeo: CampainGeoTypes) {
  // Match geo targeting criteria goes here
  // Match country and region
  return bidRequestGeo.country === campaignGeo.country && bidRequestGeo.region === campaignGeo.region;
}

function matchBlockedCategories(bidRequestBcat: string[], campaignBcat: string[]) {
  // Check if any blocked category is present in the bid request's bcat array
  return campaignBcat.some((category) => bidRequestBcat.includes(category));
}

export default answerToAdEx;