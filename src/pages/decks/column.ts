import { Column } from '@/pages/decks/decks'

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
    key: '',
    sortable: false,
    title: '',
  },
]
