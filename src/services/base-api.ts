import { CreateDeckArgs, Deck, DecksResponse, GetDecksArgs } from '@/services/decks/decks.types'
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
    createDeck: builder.mutation<Deck, CreateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: arg => ({
        body: arg,
        method: 'POST',
        url: 'v1/decks',
      }),
    }),
    deleteDeck: builder.mutation<Deck, string>({
      invalidatesTags: ['Decks'],
      query: id => ({
        method: 'DELETE',
        url: `v1/decks/${id}`,
      }),
    }),
    getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
      providesTags: ['Decks'],
      query: arg => ({
        params: arg ?? undefined,
        url: 'v2/decks',
      }),
    }),
  }),
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
})

export const { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } = baseApi
