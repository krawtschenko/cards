import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input/input'
import { Loader } from '@/components/ui/loader/loader'
import { Table, TableBody, TableData, TableRow } from '@/components/ui/table/table'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'

import style from './decks.module.scss'

import { columns } from './column'
import { Header } from './header'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export type Column = {
  key: string
  sortable: boolean
  title: string
}

export const Decks = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [search, setSearch] = useState('')

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()

  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    } else {
      return `${sort.key}-${sort.direction}`
    }
  }, [sort])

  const { data, isLoading } = useGetDecksQuery({
    name: search,
    orderBy: sortedString,
  })

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
          <Button disabled={isDeckBeingCreated} onClick={() => createDeck({ name: 'test deck' })}>
            Add deck
          </Button>
        </div>
        <Table className={style.table}>
          <Header columns={columns} onSort={setSort} sort={sort} />
          <TableBody>
            {data?.items.map(({ author, cardsCount, id, name, updated }) => {
              return (
                <TableRow key={id}>
                  <TableData>{name}</TableData>
                  <TableData>{cardsCount}</TableData>
                  <TableData>{new Date(updated).toLocaleDateString('pl')}</TableData>
                  <TableData>{author.name}</TableData>
                  <TableData>
                    <Button disabled={isDeckBeingDeleted} onClick={() => deleteDeck(id)}>
                      Delete
                    </Button>
                  </TableData>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
