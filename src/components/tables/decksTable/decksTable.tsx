import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button/button'
import { Table, TableBody, TableData, TableHeader, TableRow } from '@/components/ui/table/table'
import { Deck } from '@/services/decks/decks.types'
import { PiPencilLine, PiPlayCircle, PiTrash } from 'react-icons/pi'

import style from './decks.module.scss'

import { Sort, columns } from './column'

type DecksTableProps = {
  currentUserId?: string
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick?: (id: string) => void
  onSort: (key: Sort) => void
  sort: Sort
}

export const DecksTable = (props: DecksTableProps) => {
  const { currentUserId, decks, onDeleteClick, onEditClick, onSort, sort } = props

  // const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)

  return (
    <Table className={style.table}>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {decks?.map(({ author, cardsCount, id, name, updated }) => {
          return (
            <TableRow key={id}>
              <TableData>{name}</TableData>
              <TableData>{cardsCount}</TableData>
              <TableData>{new Date(updated).toLocaleDateString('pl')}</TableData>
              <TableData>{author.name}</TableData>
              <TableData className={style.tableDataIcons} typography={false}>
                <div className={style.actions}>
                  <Button as={Link} className={style.icon} typography={false}>
                    <PiPlayCircle />
                  </Button>
                  <Button className={style.icon} typography={false}>
                    <PiPencilLine />
                  </Button>
                  <Button className={style.icon} typography={false}>
                    <PiTrash />
                  </Button>
                </div>
              </TableData>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
