import { ChangeEvent } from 'react'

import { DecksTable } from '@/components/tables/decksTable/decksTable'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Pagination } from '@/components/ui/pagination/pagination'
import { Slider } from '@/components/ui/slider/slider'
import { Switcher } from '@/components/ui/switcher/switcher'
import { Typography } from '@/components/ui/typography/typography'
import { useDeckSearchParams } from '@/pages/decksPage/useDeckSearchParams'
import { useMeQuery } from '@/services/auth/auth.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} from '@/services/decks/decks.service'
import { useDebounce } from '@/utils/hooks/useDebounce'
import { PiTrash } from 'react-icons/pi'

import style from './decksPage.module.scss'

export const DecksPage = () => {
  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const { data: minMax } = useGetMinMaxCardsQuery()
  const { data: me } = useMeQuery()

  const {
    currentPage,
    currentTab,
    maxCardsCount,
    minCardsCount,
    perPage,
    rangeValue,
    search,
    setCurrentPage,
    setCurrentTab,
    setMaxCards,
    setMinCards,
    setPerPage,
    setRangeValue,
    setSearch,
    setSort,
    sort,
  } = useDeckSearchParams()

  const debouncedSearch = useDebounce(search, 500)

  const authorId = currentTab === 'my' ? me?.id : undefined

  const { currentData, data } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage: perPage,
    maxCardsCount,
    minCardsCount,
    name: debouncedSearch ?? undefined,
    orderBy: sort ? `${sort.key}-${sort.direction}` : null,
  })

  const decksData = currentData ?? data

  const clearFilters = () => {
    setCurrentPage(null)
    setSearch(null)
    setMinCards(null)
    setMaxCards(null)
    setRangeValue([minMax?.min ?? 0, minMax?.max ?? null])
    setSort(null)
  }

  const handleSliderCommit = (value: number[]) => {
    setCurrentPage(null)
    setMinCards(value[0])
    setMaxCards(value[1])
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(null)
    setSearch(event.currentTarget.value)
  }

  return (
    <div className={style.root}>
      <div className={style.head}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button
          className={style.button}
          onClick={() =>
            createDeck({
              name: 'Amor vincit omnia',
            })
          }
          text={'Add New Deck'}
        />
      </div>

      <div className={style.deck}>
        <div className={style.params}>
          <Input
            className={style.input}
            id={'search'}
            onChange={onChangeHandler}
            onClearValue={() => setSearch(null)}
            placeholder={'Input search'}
            type={'search'}
            value={search ?? ''}
          />

          <Switcher
            data={[
              { onClick: () => setCurrentTab('my'), value: 'My Cards' },
              { onClick: () => setCurrentTab(null), value: 'All Cards' },
            ]}
            label={'Show decks cards'}
            value={authorId ? 'My Cards' : 'All Cards'}
          />

          <Slider
            label={'Number of cards'}
            max={minMax?.max || 0}
            min={minMax?.min || 0}
            onValueChange={setRangeValue}
            onValueCommit={handleSliderCommit}
            value={rangeValue}
          />

          <Button
            className={style.button}
            icon={<PiTrash />}
            onClick={clearFilters}
            text={'Clear Filter'}
            variant={'secondary'}
          />
        </div>

        <DecksTable
          className={style.table}
          currentUserId={me?.id}
          decks={decksData?.items}
          onDeleteClick={deleteDeck}
          onSort={setSort}
          sort={sort}
        />
      </div>

      {(decksData?.pagination.totalPages ?? 0) <= 1 || (
        <div className={style.pagination}>
          <Pagination
            count={decksData?.pagination.totalPages ?? 0}
            defaultValue={perPage}
            onChange={setCurrentPage}
            onPerPageChange={setPerPage}
            page={currentPage ?? 1}
            perPageOptions={[10, 20, 30, 50]}
          />
        </div>
      )}
    </div>
  )
}
