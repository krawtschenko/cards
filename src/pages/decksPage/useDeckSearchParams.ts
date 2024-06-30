import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Sort } from '@/components/tables/decksTable/column'
import { useGetMinMaxCardsQuery } from '@/services/decks/decks.service'
import { useQueryParam } from '@/utils/hooks/useQueryParam'

export function useDeckSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: minMax } = useGetMinMaxCardsQuery()

  const [currentPage, setCurrentPage] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'page',
    1
  )

  const [perPage, setPerPage] = useQueryParam<number>(searchParams, setSearchParams, 'perPage', 10)

  const [minCardsCount, setMinCards] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'minCards',
    minMax?.min
  )

  const [maxCardsCount, setMaxCards] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'maxCards',
    minMax?.max
  )

  const [search, setSearch] = useQueryParam<string>(searchParams, setSearchParams, 'search')

  const [currentTab, setCurrentTab] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'currentTab',
    'all'
  )

  const [rangeValue, setRangeValue] = useState([minCardsCount, maxCardsCount])

  const [sortKey, setSortKey] = useQueryParam<string>(searchParams, setSearchParams, 'sortKey')

  const [sortDirection, setSortDirection] = useQueryParam<'asc' | 'desc'>(
    searchParams,
    setSearchParams,
    'sortDirection'
  )

  const setSort = (sort: Sort) => {
    if (!sort) {
      setSortKey(null)
      setSortDirection(null)

      return
    }
    setSortKey(sort.key)
    setSortDirection(sort.direction)
  }

  const sort: Sort =
    sortDirection === null || sortKey === null
      ? null
      : {
          direction: sortDirection,
          key: sortKey,
        }

  useEffect(() => {
    setRangeValue([minCardsCount, maxCardsCount])
  }, [minCardsCount, maxCardsCount])

  return {
    currentPage,
    currentTab,
    maxCardsCount,
    minCardsCount,
    minMax,
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
  }
}
