import fs from 'fs';
import { CampaignType } from "../types/CampaignTypes";

let campaigns = [
  {
    id: '1',
    name: 'Campaign 1',
    targeting: {
      geo: {
        country: 'US',
        region: 'CA',
      },
      bcat: ['IAB2-1'],
    },
  },
  {
    id: '2',
    name: 'Campaign 2',
    targeting: {
      geo: {
        country: 'US',
        region: 'NY',
      },
      bcat: ['IAB3-1', 'IAB4-2'],
    },
  },
  // Add more campaigns here
];

const getAll = () => campaigns;

const createOne = (newCampaigns: CampaignType[]) => {
  try {
    campaigns = campaigns.concat(newCampaigns);
    return campaigns;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteMany = (campaignIdsToDelete: any[]) => {
  try {
    campaigns = campaigns.filter((campaign) => {
      return !campaignIdsToDelete.includes(campaign.id);
    });
    return campaigns;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getAll, createOne, deleteMany };
