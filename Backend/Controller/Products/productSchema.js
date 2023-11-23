import Joi from "joi";

export const productValSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  discountedPrice: Joi.number().required(),
  discountedPercentage: Joi.number().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().required(),
});
