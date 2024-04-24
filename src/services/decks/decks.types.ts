export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DeckAuthor = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: null | number
  minCardsCount?: null | number
  name?: string
  orderBy?: null | string
  userId?: string
}

export type CreateDeckArgs = {
  isPrivate?: boolean
  name: string
}

export type GetMinMaxCards = {
  max: number
  min: number
}
