import joi from "joi"

export const UserSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().email(),
    password:joi.string().min(7).max(30).required()

})

export const LoginSchema = joi.object({
    email:joi.string().email(),
    password:joi.string().required()
})