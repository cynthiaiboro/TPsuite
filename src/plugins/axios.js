import axios from 'axios'

export default axios.create({
    baseURL: 'https://dev.topupbox.com',
    ContentType: 'application/json'
})