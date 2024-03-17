import { DecksResponse } from '@/services/decks/decks.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, void>({
      query: () => `v2/decks`,
    }),
  }),
  reducerPath: 'baseApi',
})

export const { useGetDecksQuery } = baseApi
