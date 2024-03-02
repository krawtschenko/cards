import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import style from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
  color?: 'dark' | 'error' | 'light' | 'link'
  variant: Variant
} & ComponentPropsWithoutRef<T>

type Variant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, color, variant, ...rest } = props

  return <Component className={clsx(style[variant], color && style[color], className)} {...rest} />
}
