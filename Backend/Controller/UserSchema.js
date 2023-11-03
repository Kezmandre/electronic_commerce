import joi from "joi"

export const userSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().min(7).max(30).required()

})