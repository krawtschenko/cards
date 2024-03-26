import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'

import style from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  text?: ReactNode
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>['ref']

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicRef<T>) => {
    const {
      as: Component = 'button',
      className,
      fullWidth,
      icon,
      text,
      variant = 'primary',
      ...rest
    } = props

    return (
      <Component
        className={clsx(style[variant], fullWidth && style.fullWidth, className)}
        ref={ref}
        {...rest}
      >
        {icon && <div className={style.icon}>{icon}</div>}
        {text && <Typography variant={'subtitle2'}>{text}</Typography>}
      </Component>
    )
  }
)
