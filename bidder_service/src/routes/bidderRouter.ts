import express from 'express';
import answerToAdEx from '../controllers/bidderController';

const campaignRouter = express.Router();
campaignRouter.route('/').post(answerToAdEx);

export default campaignRouter;