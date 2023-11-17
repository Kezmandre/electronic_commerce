import joi, { number } from "joi";

export const productSchema = joi.object({
    title: joi.string().required(),
    price:joi.number().required(),
    discountPrice:joi.number(),
    description: joi.string().required(),
    imageUrl:joi.string().required()

})