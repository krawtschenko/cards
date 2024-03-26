import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button/button'
import { Table, TableBody, TableData, TableHeader, TableRow } from '@/components/ui/table/table'
import { Deck } from '@/services/decks/decks.types'
import clsx from 'clsx'
import { PiPencilLine, PiPlayCircle, PiTrash } from 'react-icons/pi'

import style from './decks.module.scss'

import { Sort, columns } from './column'

type DecksTableProps = {
  className?: string
  currentUserId?: string
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick?: (id: string) => void
  onSort: (key: Sort) => void
  sort: Sort
}

export const DecksTable = (props: DecksTableProps) => {
  const { className, currentUserId, decks, onDeleteClick, onEditClick, onSort, sort } = props

  // const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => onDeleteClick(id)

  return (
    <Table className={clsx(style.table, className)}>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {decks?.map(({ author, cardsCount, id, name, updated }) => {
          return (
            <TableRow key={id}>
              <TableData>{name}</TableData>
              <TableData className={style.tableData}>{cardsCount}</TableData>
              <TableData className={style.tableData}>
                {new Date(updated).toLocaleDateString('pl')}
              </TableData>
              <TableData className={style.tableData}>{author.name}</TableData>
              <TableData className={style.tableDataIcons} typography={false}>
                <div className={style.actions}>
                  <Button as={Link} className={style.icon} icon={<PiPlayCircle />} />
                  <Button className={style.icon} icon={<PiPencilLine />} />
                  <Button
                    className={style.icon}
                    icon={<PiTrash />}
                    onClick={() => handleDeleteClick(id)}
                  />
                </div>
              </TableData>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
