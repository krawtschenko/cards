import { useState } from 'react'

import { Sort } from '@/components/tables/decksTable/column'
import { DecksTable } from '@/components/tables/decksTable/decksTable'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Loader } from '@/components/ui/loader/loader'
import { Slider } from '@/components/ui/slider/slider'
import { Switcher } from '@/components/ui/switcher/switcher'
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
        <div className={style.paramsWrapper}>
          <Input
            className={style.input}
            onChange={event => setSearch(event.currentTarget.value)}
            onClearValue={() => setSearch('')}
            placeholder={'Input search'}
            type={'search'}
            value={search}
          />

          <Switcher
            data={[{ value: 'My Cards' }, { value: 'All Cards' }]}
            defaultValue={'All Cards'}
            label={'Show decks cards'}
          />

          <Slider label={'Number of cards'} max={100} min={0} />

          <Button onClick={() => createDeck({ name: 'test deck' })}>Clear Filter</Button>
        </div>

        <DecksTable
          className={style.table}
          decks={decks?.items}
          onDeleteClick={deleteDeck}
          onSort={setSort}
          sort={sort}
        />
      </div>
    </>
  )
}
