import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// import { baseQueryWithReauth } from './base-query-with-reauth'

export const baseApi = createApi({
  // baseQuery: baseQueryWithReauth,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'],
})
