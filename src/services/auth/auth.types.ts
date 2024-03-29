export type User = {
  avatar: null | string
  created: Date
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: Date
}

export type Login = {
  email: string
  password: string
  rememberMe: boolean
}

export type Registration = {
  email: string
  password: string
  sendConfirmationEmail?: boolean
}

export type RegistrationRes = {
  avatar: string
  created: Date
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: Date
}
