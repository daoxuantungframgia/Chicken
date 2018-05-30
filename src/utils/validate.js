export function validateEmail (email) {
  const regex = /\S+@\S+\.\S+/
  return regex.test(String(email).toLowerCase())
}

export function validatePhoneNumber (phoneNumber) {
  const regex = /^\d{10}$|^\d{11}$/
  return regex.test(phoneNumber)
}
