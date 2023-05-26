import Joi from "joi"

const userResponseModel = Joi.object({
    sub: Joi.string().required(),
})

export { userResponseModel }