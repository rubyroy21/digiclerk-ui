import { customersResponseModel } from '../validators'

const parseCustomersResponse = (response) => {
    const { error: customersResponseError, value: customersResponseValue } = customersResponseModel.validate(response.data, { allowUnknown: true, stripUnknown: true })

    if (customersResponseError !== undefined) {
        return []
    }

    return customersResponseValue.data
}

export { parseCustomersResponse }