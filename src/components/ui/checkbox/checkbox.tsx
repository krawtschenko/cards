import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { MdCheck } from 'react-icons/md'

import style from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label: string
  name?: string
  onValueChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, className, label, onValueChange, ...rest } = props

    console.log(rest.disabled)

    return (
      <div className={clsx(style.wrapper, className)}>
        <CheckboxRadix.Root
          checked={checked}
          className={clsx(style.checkboxRoot)}
          onCheckedChange={onValueChange}
          ref={ref}
          {...rest}
        >
          <div className={style.checkboxContainer}>
            <CheckboxRadix.Indicator className={style.checkboxIndicator}>
              <MdCheck />
            </CheckboxRadix.Indicator>
          </div>
        </CheckboxRadix.Root>

        <Typography className={clsx(rest.disabled && style.label)} variant={'body2'}>
          {label}
        </Typography>
      </div>
    )
  }
)
