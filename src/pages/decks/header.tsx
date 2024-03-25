import { ComponentPropsWithoutRef } from 'react'

import { TableHead, TableHeadCell, TableRow } from '@/components/ui/table/table'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Column, Sort } from 'src/pages/decks/decks'

type HeaderProps = {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & ComponentPropsWithoutRef<'thead'>

export const Header = (props: HeaderProps) => {
  const { columns, onSort, sort, ...rest } = props

  const handleSort = (key: string, sortable: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  const arrowGenerate = (key: string, sortable: boolean) => {
    if (!sortable) {
      return
    } else {
      return (
        sort &&
        sort.key === key &&
        (sort.direction === 'asc' ? <IoIosArrowUp /> : <IoIosArrowDown />)
      )
    }
  }

  return (
    <TableHead {...rest}>
      <TableRow>
        {columns.map(({ key, sortable, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {arrowGenerate(key, sortable)}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
