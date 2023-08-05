import fs from 'fs';
import { CampaignType } from "../types/CampaignTypes";
import initialCampaigns from '../data/initialCampaigns';

/**
 * Save pre-configured campaigns array
 * This array will be used as a simplified version of DB
 */
let campaigns = [...initialCampaigns];

// Returning all campaigns from simplified DB
const getAll = () => campaigns;

// Add campaigns into simplified DB
const createOne = (newCampaigns: CampaignType[]) => {
  try {
    campaigns = campaigns.concat(newCampaigns);
    return campaigns;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Remove campaigns from simplified DB
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
