/** Import des modules nécessaires */
import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use(request => {

    return request
})

/**
 * Interceptor des réponses de l'API
 */
Axios.interceptors.response.use(response => {
    return response
}, error => {

    console.log(error)
})

export default Axios