import axios from "axios"
import { formToObj, getToken } from "../helpers/common"

export async function createDivelog(request) {
  const data = await formToObj(request)
  return await axios.post('/api/divelog/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  })
}

export async function editDivelog(request, id) {
  const data = await formToObj(request)
  console.log('PATCH request data:', data);
  return await axios.patch(`/api/divelog/${id}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  })
}


