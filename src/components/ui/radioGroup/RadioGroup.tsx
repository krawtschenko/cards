import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import * as RadioGroups from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import style from './radioGroup.module.scss'

export type RadioGroupProps = {
  data: Data[]
  defaultValue?: string
  disabled?: boolean
  name?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'div'>

export type Data = {
  id: string
  value: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { data, defaultValue, disabled } = props

  return (
    <form>
      <RadioGroups.Root
        aria-label={'View density'}
        className={style.radioGroupRoot}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {data.map(({ id, value }) => {
          return (
            <div className={style.wrapper} key={id}>
              <RadioGroups.Item className={style.radioGroupItem} id={id} value={id}>
                <RadioGroups.Indicator className={style.radioGroupIndicator} />
              </RadioGroups.Item>

              <Typography className={clsx(disabled && style.label)} variant={'body2'}>
                {value}
              </Typography>
            </div>
          )
        })}
      </RadioGroups.Root>
    </form>
  )
}
