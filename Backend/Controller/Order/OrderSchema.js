import joi from "joi";

export const orderSchema = joi.object({
  address: joi.string().required(),
  phoneNumber: joi.number().required(),
  items: joi.array().items(
    joi.object({
      product: joi.string().length(24).required(), // Assuming product is a valid ObjectId string
      quantity: joi.number().required(),
    })
  ),
});
