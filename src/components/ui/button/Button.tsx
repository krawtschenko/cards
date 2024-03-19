import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import clsx from 'clsx'

import style from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>['ref']

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicRef<T>) => {
    const {
      as: Component = 'button',
      children,
      className,
      fullWidth,
      variant = 'primary',
      ...rest
    } = props

    return (
      <Component
        className={clsx(style[variant], fullWidth && style.fullWidth, className)}
        ref={ref}
        {...rest}
      >
        <Typography variant={'subtitle2'}>{children}</Typography>
      </Component>
    )
  }
)
