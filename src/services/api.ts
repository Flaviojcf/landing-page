import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?'
})