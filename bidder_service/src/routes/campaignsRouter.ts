import express from 'express';
import { getCampaigns, createCampaigns, deleteCampaigns } from '../controllers/campaignController';

const campaignRouter = express.Router();
campaignRouter.route('/')
  .get(getCampaigns)
  .post(createCampaigns)
  .delete(deleteCampaigns);

export default campaignRouter;