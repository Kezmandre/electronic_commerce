import Joi from "joi";

export const addToFavoriteSchema = Joi.object({
  productId: Joi.string().required(),
  quantity: Joi.number().optional(),
});
