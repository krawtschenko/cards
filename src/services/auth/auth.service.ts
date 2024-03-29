import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LoginArgs, User } from './auth.types'

export const authService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  }),
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Me'],
      query: arg => ({
        body: arg,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    me: builder.query<User, void>({
      providesTags: ['Me'],
      query: () => '/v1/auth/me',
    }),
  }),
  reducerPath: 'authService',
  tagTypes: ['Me'],
})

export const { useLoginMutation, useMeQuery } = authService
