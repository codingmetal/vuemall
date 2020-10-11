import axios from 'axios'

const BASEURL = 'http://152.136.185.210:8000/api/w6'

export function request(config) {
  const instance = axios.create({
    baseURL: BASEURL,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  return instance(config)
}
