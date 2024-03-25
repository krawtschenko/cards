import { useState } from 'react'

import { Sort } from '@/components/tables/decksTable/column'
import { DecksTable } from '@/components/tables/decksTable/decksTable'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Loader } from '@/components/ui/loader/loader'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'

import style from './decksPage.module.scss'

export const DecksPage = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [search, setSearch] = useState('')

  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const {
    currentData: decksCurrentData,
    data: decksData,
    isLoading,
  } = useGetDecksQuery({
    name: search,
    orderBy: sort ? `${sort.key}-${sort.direction}` : null,
  })

  const decks = decksCurrentData ?? decksData

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div className={style.root}>
        <div className={style.inputWrapper}>
          <Input
            className={style.input}
            label={'Search'}
            onChange={event => setSearch(event.currentTarget.value)}
            onClearValue={() => setSearch('')}
            type={'search'}
            value={search}
          />
          <Button onClick={() => createDeck({ name: 'test deck' })}>Add deck</Button>
        </div>

        <DecksTable decks={decks?.items} onDeleteClick={deleteDeck} onSort={setSort} sort={sort} />
      </div>
    </>
  )
}
