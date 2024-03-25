export type Column = {
  key: string
  sortable: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export const columns: Column[] = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'author.name',
    sortable: true,
    title: 'Author',
  },
  {
    key: 'actions',
    sortable: false,
    title: '',
  },
]
