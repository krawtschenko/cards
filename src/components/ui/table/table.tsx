import { ComponentPropsWithoutRef } from 'react'

import { Column, Sort } from '@/components/tables/decksTable/column'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import style from './table.module.scss'

export const Table = ({ className, ...rest }: ComponentPropsWithoutRef<'table'>) => {
  return <table className={clsx(style.table, className)} {...rest}></table>
}

export const TableHead = ({ className, ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  return <thead className={clsx(style.tableHead, className)} {...rest}></thead>
}

export const TableBody = ({ className, ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  return <tbody className={clsx(style.tableBody, className)} {...rest}></tbody>
}

export const TableRow = ({ className, ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  return <tr className={clsx(style.tableRow, className)} {...rest}></tr>
}

export const TableHeadCell = ({ className, ...rest }: ComponentPropsWithoutRef<'th'>) => {
  return (
    <th className={clsx(style.tableHeadCell, className)} {...rest}>
      <Typography className={style.typography} variant={'subtitle2'}>
        {rest.children}
      </Typography>
    </th>
  )
}

export const TableData = ({
  className,
  typography = true,
  ...rest
}: ComponentPropsWithoutRef<'td'> & { typography?: boolean }) => {
  return (
    <td className={clsx(style.tableData, className)} {...rest}>
      {typography ? <Typography variant={'body2'}>{rest.children}</Typography> : rest.children}
    </td>
  )
}

export const TableHeader = ({
  columns,
  onSort,
  sort,
  ...rest
}: ComponentPropsWithoutRef<'thead'> & {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
}) => {
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
