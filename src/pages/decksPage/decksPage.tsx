import { useState } from 'react'

import { Sort } from '@/components/tables/decksTable/column'
import { DecksTable } from '@/components/tables/decksTable/decksTable'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Loader } from '@/components/ui/loader/loader'
import { Slider } from '@/components/ui/slider/slider'
import { Switcher } from '@/components/ui/switcher/switcher'
import { Typography } from '@/components/ui/typography/typography'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'
import { PiTrash } from 'react-icons/pi'

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
        <div className={style.params}>
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

          <Button
            className={style.button}
            icon={<PiTrash />}
            text={'Clear Filter'}
            variant={'secondary'}
          />
        </div>

        <DecksTable
          className={style.table}
          decks={decks?.items}
          onDeleteClick={deleteDeck}
          onSort={setSort}
          sort={sort}
        />
      </div>
    </div>
  )
}
