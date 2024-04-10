import { useState } from 'react'

import { Sort } from '@/components/tables/decksTable/column'
import { DecksTable } from '@/components/tables/decksTable/decksTable'
import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography/typography'
import { DecksPageFilters } from '@/pages/decksPage/decksPageFilters'
import { useMeQuery } from '@/services/auth/auth.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useLazyGetDecksQuery,
} from '@/services/decks/decks.service'

import style from './decksPage.module.scss'

export const DecksPage = () => {
  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [getDecks, { data: decksData }] = useLazyGetDecksQuery()
  const { data: meData } = useMeQuery()

  const [sort, setSort] = useState<Sort>(null)

  return (
    <div className={style.root}>
      <div className={style.head}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button
          className={style.button}
          onClick={() => createDeck({ name: 'Jeszcze Polska nie zginęła' })}
          text={'Add New Deck'}
        />
      </div>
      <div className={style.deck}>
        <DecksPageFilters getDecks={getDecks} setSort={setSort} sort={sort} />
        <DecksTable
          className={style.table}
          currentUserId={meData?.id}
          decks={decksData?.items}
          onDeleteClick={deleteDeck}
          onSort={setSort}
          sort={sort}
        />
      </div>
    </div>
  )
}
