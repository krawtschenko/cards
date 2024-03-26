import { ReactNode } from 'react'

import clsx from 'clsx'

import style from './container.module.scss'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(style.root, className)}>{children}</div>
}
