import { ComponentPropsWithoutRef } from 'react'

import style from './table.module.scss'

export const Table = ({ ...rest }: ComponentPropsWithoutRef<'table'>) => {
  return <table cellPadding={'0'} cellSpacing={'0'} className={style.table} {...rest}></table>
}

export const TableHead = ({ ...rest }: ComponentPropsWithoutRef<'thead'>) => {
  return <thead className={style.thead} {...rest}></thead>
}

export const TableBody = ({ ...rest }: ComponentPropsWithoutRef<'tbody'>) => {
  return <tbody className={style.tbody} {...rest}></tbody>
}

export const TableRow = ({ ...rest }: ComponentPropsWithoutRef<'tr'>) => {
  return <tr className={style.tr} {...rest}></tr>
}

export const TableHeader = ({ ...rest }: ComponentPropsWithoutRef<'th'>) => {
  return <th className={style.th} {...rest}></th>
}

export const TableData = ({ ...rest }: ComponentPropsWithoutRef<'td'>) => {
  return <td className={style.td} {...rest}></td>
}
