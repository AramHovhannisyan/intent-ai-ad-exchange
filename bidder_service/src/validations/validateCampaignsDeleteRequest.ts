import Joi from 'joi';

const deleteCampaignsSchema = Joi.array().items(Joi.string().required());

const validator = (schema: any) => (payload: []) => schema.validate(payload, {
  abortEarly: false,
  allowUnknown: true,
});

const validateDeleteCampaignsSchema = validator(deleteCampaignsSchema);

export default validateDeleteCampaignsSchema;