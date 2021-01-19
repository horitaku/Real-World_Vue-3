import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/horitaku/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrders(perPage, page) {
    return apiClient.get('/orders?_limit=' + perPage + '&_page=' + page)
  },
  // getEvents() {
  //   return apiClient.get('/orders')
  // },
  getOrder(id) {
    return apiClient.get('/orders/' + id)
  }
}