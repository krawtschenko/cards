import { Link } from 'react-router-dom'

import noCover from '@/assets/images/no-photos.png'
import { Button } from '@/components/ui/button/button'
import { Table, TableBody, TableData, TableHeader, TableRow } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography/typography'
import { Deck } from '@/services/decks/decks.types'
import clsx from 'clsx'
import { PiPencilLine, PiPlayCircle, PiTrash } from 'react-icons/pi'

import style from './decksTable.module.scss'

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
  const { className, currentUserId, decks, onDeleteClick, onSort, sort } = props

  const handleDeleteClick = (id: string) => onDeleteClick(id)

  return (
    <>
      <Table className={clsx(style.table, className)}>
        <TableHeader columns={columns} onSort={onSort} sort={sort} />
        <TableBody>
          {decks?.map(({ author, cardsCount, cover, id, name, updated }) => {
            return (
              <TableRow key={id}>
                <TableData as={Link} className={style.tableName} title={name}>
                  <div className={style.tableNameWrapper}>
                    <img alt={'cover'} src={cover ? cover : noCover} />
                    <Typography variant={'body2'}>
                      {name.length <= 29 ? name : name.slice(0, 27) + '...'}
                    </Typography>
                  </div>
                </TableData>
                <TableData className={style.tableData}>{cardsCount}</TableData>
                <TableData className={style.tableData}>
                  {new Date(updated).toLocaleDateString('pl')}
                </TableData>
                <TableData className={style.tableDataAuthor}>{author.name}</TableData>
                <TableData className={style.tableDataIcons} typography={false}>
                  <div className={style.actions}>
                    <Button
                      className={style.icon}
                      disabled={cardsCount === 0}
                      icon={<PiPlayCircle />}
                    />
                    {currentUserId === author.id && (
                      <>
                        <Button className={style.icon} icon={<PiPencilLine />} />
                        <Button
                          className={style.icon}
                          icon={<PiTrash />}
                          onClick={() => handleDeleteClick(id)}
                        />
                      </>
                    )}
                  </div>
                </TableData>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {/*{!decks && <h1>LOADING</h1>}*/}
    </>
  )
}
