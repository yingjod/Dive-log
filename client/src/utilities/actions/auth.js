import axios from 'axios'

export async function registerUser(request) {
  const data = await formToObj(request)
  return await axios.post('http://localhost:8000/api/auth/register/', data, {
    validateStatus: () => true
  })
}

export async function loginUser(request){
  const data = await formToObj(request)
  return await axios.post('http://localhost:8000/api/auth/login/', data, {
    validateStatus: () => true
  })
}


async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}


