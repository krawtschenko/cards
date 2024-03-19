import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
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

export const Checkbox = (props: CheckboxProps) => {
  const { checked, className, disabled, id, label, name, onValueChange, ...rest } = props

  return (
    <div className={clsx(style.wrapper, className)}>
      <CheckboxRadix.Root
        checked={checked}
        className={clsx(style.checkboxRoot)}
        disabled={disabled}
        id={id}
        name={name}
        onCheckedChange={onValueChange}
        {...rest}
      >
        <div className={style.checkboxContainer}>
          <CheckboxRadix.Indicator className={style.checkboxIndicator}>
            <MdCheck />
          </CheckboxRadix.Indicator>
        </div>
      </CheckboxRadix.Root>

      <Typography className={clsx(disabled && style.label)} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
