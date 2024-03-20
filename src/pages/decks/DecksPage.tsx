import { useState } from 'react'

import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/Table'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/base-api'

import style from './decksPage.module.scss'

export const DecksPage = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = useGetDecksQuery({ name: search })
  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={style.root}>
      <div className={style.inputWrapper}>
        <Input
          className={style.input}
          label={'Search'}
          onChange={event => setSearch(event.currentTarget.value)}
          type={'search'}
          value={search}
        />
        <Button disabled={isDeckBeingCreated} onClick={() => createDeck({ name: 'test deck' })}>
          Add deck
        </Button>
      </div>
      <Table className={style.table}>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
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
  )
}
