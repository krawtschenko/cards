import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'

import style from './table.module.scss'

export const Table = ({ ...rest }: ComponentPropsWithoutRef<'table'>) => {
  return <table className={style.table} {...rest}></table>
}

export const TableHead = ({ ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  return <thead className={style.tableHead} {...rest}></thead>
}

export const TableBody = ({ ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  return <tbody className={style.tableBody} {...rest}></tbody>
}

export const TableRow = ({ ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  return <tr className={style.tableRow} {...rest}></tr>
}

export const TableHeader = ({ ...rest }: ComponentPropsWithoutRef<'th'>) => {
  return (
    <th className={style.tableHeader} {...rest}>
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
