import axios from 'axios'
import { API_ROOT } from '~/utilities/constant'

export const registerAPI = async(data) => {
  const response = await axios.post(`${API_ROOT}/user/register`, data)
  return response.data
}