import Joi from "joi";

export const AddToCartSchema = Joi.object({
  productId: Joi.string().required(),
  quantity: Joi.number().optional(),

});
