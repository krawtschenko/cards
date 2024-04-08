import { baseApi } from '@/services/common/baseApi'

import { Login, Registration, RegistrationRes, User } from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, Login>({
      query: arg => ({
        body: arg,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/v1/auth/logout',
      }),
    }),
    me: builder.query<User, void>({
      query: () => '/v1/auth/me',
    }),
    registration: builder.mutation<RegistrationRes, Registration>({
      query: arg => ({
        body: arg,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useRegistrationMutation } =
  authService
