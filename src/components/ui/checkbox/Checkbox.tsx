import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { MdCheck } from 'react-icons/md'

import style from './checkbox.module.scss'

type CheckboxProps = {
  classname?: string
  label: string
  name: string
} & ComponentPropsWithoutRef<'button'>

export const CheckBox = (props: CheckboxProps) => {
  const { classname, disabled, label, name } = props

  return (
    <div className={style.wrapper}>
      <Checkbox.Root className={clsx(style.checkboxRoot, classname)} disabled={disabled} id={name}>
        <div className={style.checkboxContainer}>
          <Checkbox.Indicator className={style.checkboxIndicator}>
            <MdCheck />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>

      <Typography className={clsx(disabled && style.label)} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
