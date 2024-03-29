import { baseApi } from '@/services/baseApi'

import { CreateDeckArgs, Deck, DecksResponse, GetDecksArgs, GetMinMaxCards } from './decks.types'

export const decksService = baseApi.injectEndpoints({
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
    getMinMaxCards: builder.query<GetMinMaxCards, void>({
      query: () => 'v2/decks/min-max-cards',
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = decksService
