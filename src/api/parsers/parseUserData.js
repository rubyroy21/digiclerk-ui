import { userResponseModel } from '../validators'

const parseUserData = (response) => {
    const { error: userResponseError, value: userResponseValue } = userResponseModel.validate(response, { allowUnknown: true, stripUnknown: true })

    if (userResponseError !== undefined) {
        return null
    }

    return {name: null, user: userResponseValue.sub, role: null}
}

export { parseUserData }