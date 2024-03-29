export type User = {
  avatar: null | string
  created: Date
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: Date
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}
