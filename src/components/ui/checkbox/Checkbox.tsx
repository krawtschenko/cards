import { Typography } from '@/components/ui/typography/Typography'
import * as CheckBox from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { MdCheck } from 'react-icons/md'

import style from './checkbox.module.scss'

type CheckboxProps = {
  classname?: string
  disabled?: boolean
  label: string
  name?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { classname, disabled, label, name } = props

  return (
    <div className={style.wrapper}>
      <CheckBox.Root className={clsx(style.checkboxRoot, classname)} disabled={disabled} id={name}>
        <div className={style.checkboxContainer}>
          <CheckBox.Indicator className={style.checkboxIndicator}>
            <MdCheck />
          </CheckBox.Indicator>
        </div>
      </CheckBox.Root>

      <Typography className={clsx(disabled && style.label)} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
