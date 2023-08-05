import { Request, Response, NextFunction } from 'express';
import { getAll, createOne, deleteMany } from '../services/campaignsService';
import validateCampaignsDeleteRequest from '../validations/validateCampaignsDeleteRequest';
import validateCampaignsPostRequest from '../validations/validateCampaignsPostRequest';

// Show all campaigns
const getCampaigns = (req: Request, res: Response, next: NextFunction) => {
  const campaigns = getAll();

  return res.status(200).json({
      status: 'success',
      data: {
        campaigns,
      }
  });
};

// Create campaigns
const createCampaigns = async (req: Request, res: Response, next: NextFunction) => {
  const newCampaigns = req.body;

  const { error } = validateCampaignsPostRequest(req.body);

  if (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Request',
      data: {
        details: error.details,
      },
    });
  }
  
  const allCampaigns = await createOne(newCampaigns);
  if (!allCampaigns) {
    return res.status(500).json({
      status: 'Fail',
      message: "Can not save"
    });
  }

  return res.status(200).json({
    status: 'Success',
    data: {
      campaigns: allCampaigns
    }
  });
};

// Remove Campaigns by ids
const deleteCampaigns = async (req: Request, res: Response, next: NextFunction) => {  
  const { error } = validateCampaignsDeleteRequest(req.body);

  if (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Request',
      data: {
        details: error.details,
      },
    });
  }

  const campaignIdsToDelete = req.body;
  const allCampaigns = await deleteMany(campaignIdsToDelete);
  if (!allCampaigns) {
    return res.status(500).json({
      status: 'Fail',
      message: "Can not delete"
    });
  }

  return res.status(204).send();
};



export { getCampaigns, createCampaigns, deleteCampaigns };