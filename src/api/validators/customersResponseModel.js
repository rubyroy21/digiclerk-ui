import Joi from "joi"

const customersResponseModel = Joi.object({
    data: Joi.array().items(
        Joi.object({
            customerId: Joi.string().required(),
            name: Joi.string().required(),
        })
    )
})

export { customersResponseModel }