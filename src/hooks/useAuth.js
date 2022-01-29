import { useEffect, useState } from "react"
import requests from "../api/requests"





export const useAuth = () => {
    const [token, setToken] = useState()
    // const [error, setError] = useState(false)
    const getUserToken = async (userData) => {
        const { email, password } = userData
        const token = await requests.auth.create(email, password)
        setToken(token)
        
    }

    return [getUserToken]
}