
const tokenName = 'DIVELOG-TOKEN'

// This function takes a request object and returns form data as a JS object
export async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

export function setToken(token) {
  localStorage.setItem(tokenName, token)
}

export function getToken() {
  return localStorage.getItem(tokenName)
}

export function removeToken() {
  localStorage.removeItem(tokenName)
}

export function activeUser() {

  const token = getToken()
  if (!token) return null

  // If token exists
  const b64 = token.split('.')[1]
  const payload = JSON.parse(atob(b64))

  const now = Date.now() / 1000
  const exp = payload.exp
  if (exp > now) {
    console.log(payload.user_id)
    return payload.user_id
  }

  // Validate expiry date (payload.exp) by checking the number is greater than the date right now
}