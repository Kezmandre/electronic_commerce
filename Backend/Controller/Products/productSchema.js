import joi, { number } from "joi";

export const productSchema = joi.object({
    title: joi.string().required(),
    price:joi.number().required(),
    discountedPrice:joi.number().required,
    discountedPercentage:joi.number().required(),
    description: joi.string().required(),
    imageUrl:joi.string().required()

})