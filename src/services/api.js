

import axios from 'axios';

export const key = '66e0ffdcf00c04887fcd5f170347684123679fbe'

const api = axios.create ({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api