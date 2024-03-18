import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import clsx from 'clsx'

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
      <Typography variant={'subtitle2'}>{rest.children}</Typography>
    </th>
  )
}

export const TableData = ({ ...rest }: ComponentPropsWithoutRef<'td'>) => {
  return (
    <td className={style.tableData} {...rest}>
      <Typography variant={'body2'}>{rest.children}</Typography>
    </td>
  )
}
