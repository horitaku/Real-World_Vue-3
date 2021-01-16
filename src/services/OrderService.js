import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/horitaku/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/orders?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/orders/' + id)
  }
}