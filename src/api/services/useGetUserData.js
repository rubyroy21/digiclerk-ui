import { decodeToken } from 'react-jwt'
import { useState, useEffect } from 'react'
import { parseUserData } from '../parsers'

const useGetUserData = (token) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getUserData = () => {
            try {
                const response = decodeToken(token)
                const parsedResponse = parseUserData(response)
                setData(parsedResponse)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        getUserData()
    }, [token])

    return { data, error, loading }
}

export { useGetUserData }