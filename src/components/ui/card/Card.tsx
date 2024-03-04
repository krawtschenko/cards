import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import style from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>['ref']

export const Card = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: PolymorphicRef<T>) => {
    const { as: Component = 'div', className, ...rest } = props

    return <Component className={clsx(style.card, className)} ref={ref} {...rest} />
  }
)
