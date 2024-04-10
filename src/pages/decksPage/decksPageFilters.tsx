import { useEffect, useState } from 'react'

import { Sort } from '@/components/tables/decksTable/column'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Slider } from '@/components/ui/slider/slider'
import { Switcher } from '@/components/ui/switcher/switcher'
import { useGetMinMaxCardsQuery } from '@/services/decks/decks.service'
import { DecksResponse, GetDecksArgs } from '@/services/decks/decks.types'
import { useDebounce } from '@/utils/hooks/useDebounce'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { QueryDefinition } from '@reduxjs/toolkit/query'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { PiTrash } from 'react-icons/pi'

import style from '@/pages/decksPage/decksPage.module.scss'

type DecksPageFilterProps = {
  currentUserId?: string
  getDecks: LazyQueryTrigger<
    QueryDefinition<
      GetDecksArgs | void,
      BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError>,
      'Decks' | 'Me',
      DecksResponse,
      'baseApi'
    >
  >
  setSort: (sort: Sort) => void
  sort: Sort
}

export const DecksPageFilters = ({
  currentUserId,
  getDecks,
  setSort,
  sort,
}: DecksPageFilterProps) => {
  const { data: minMax } = useGetMinMaxCardsQuery()

  const [range, setRange] = useState<number[]>([0, 100])
  const [search, setSearch] = useState<string>('')
  const [authorId, setAuthorId] = useState<string | undefined>(undefined)
  const debouncedSearch = useDebounce(search, 400)
  const debouncedRange = useDebounce(range, 200)

  const clearFilters = () => {
    setSearch('')
    if (minMax) {
      setRange([minMax?.min, minMax?.max])
    }
    setSort(null)
  }

  useEffect(() => {
    if (minMax) {
      setRange([minMax?.min, minMax?.max])
    }
  }, [minMax])

  useEffect(() => {
    getDecks({
      authorId,
      maxCardsCount: range[1],
      minCardsCount: range[0],
      name: search,
      orderBy: sort ? `${sort.key}-${sort.direction}` : null,
    })
  }, [debouncedSearch, sort, debouncedRange, authorId, getDecks, range, search])

  return (
    <div className={style.params}>
      <Input
        className={style.input}
        id={'search'}
        onChange={event => setSearch(event.currentTarget.value)}
        onClearValue={() => setSearch('')}
        placeholder={'Input search'}
        type={'search'}
        value={search}
      />

      <Switcher
        data={[
          { onClick: () => setAuthorId(currentUserId), value: 'My Cards' },
          { onClick: () => setAuthorId(undefined), value: 'All Cards' },
        ]}
        defaultValue={'All Cards'}
        label={'Show decks cards'}
      />

      <Slider
        label={'Number of cards'}
        max={minMax?.max}
        min={minMax?.min}
        onValueChange={setRange}
        value={range}
      />

      <Button
        className={style.button}
        icon={<PiTrash />}
        onClick={clearFilters}
        text={'Clear Filter'}
        variant={'secondary'}
      />
    </div>
  )
}
