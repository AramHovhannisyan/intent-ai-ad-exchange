import Joi from 'joi';
import { CampaignType } from '../types/CampaignTypes';

const configureCampaignsSchema = Joi.array().items(
  Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    targeting: Joi.object({
      geo: Joi.object({
        country: Joi.string().required(),
        region: Joi.string().required(),
      }).required(),
      bcat: Joi.array().required()
    }),
  })
);

const validator = (schema: any) => (payload: CampaignType) => schema.validate(payload, {
  abortEarly: false,
  allowUnknown: true,
});

const validateConfigureCampaignsSchema = validator(configureCampaignsSchema);

export default validateConfigureCampaignsSchema;