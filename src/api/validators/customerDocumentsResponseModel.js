import Joi from "joi"

const customerDocumentsResponseModel = Joi.object({
    documents: Joi.array().items(
        Joi.object({
            dmscode: Joi.string().required(),
            filename: Joi.string().required(),
            documenttype: Joi.string().required(),
            utmillis: Joi.number().required(),
            processingstatus: Joi.object({
                code: Joi.number().required(),
            })
        })
    )
})

export { customerDocumentsResponseModel }