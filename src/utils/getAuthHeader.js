import { decodeToken } from "react-jwt"

const getAuthHeader = (type) => {
    const jwtSecurityToken = localStorage.getItem('jwtSecurityToken')
    if (jwtSecurityToken === null) {
        return null
    }
    const [, token] = jwtSecurityToken.split(' ');

    switch (type) {
        case 'Authorization':
            return `Bearer ${token}`
        case 'X-Tenant':
            return decodeToken(token).tenantId
    }
}

export { getAuthHeader }