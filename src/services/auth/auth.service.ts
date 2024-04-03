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

export const { useLoginMutation, useMeQuery, useRegistrationMutation } = authService
