import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

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
} & ComponentPropsWithoutRef<typeof RadioGroups.Root>

export type Data = {
  label: string
  value: string
}

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroups.Root>, RadioGroupProps>(
  ({ data, ...rest }, ref) => {
    return (
      <form>
        <RadioGroups.Root
          aria-label={'View density'}
          className={style.radioGroupRoot}
          ref={ref}
          {...rest}
        >
          {data.map(({ label, value }) => {
            return (
              <div className={style.wrapper} key={value}>
                <RadioGroups.Item className={style.radioGroupItem} id={label} value={value}>
                  <RadioGroups.Indicator className={style.radioGroupIndicator} />
                </RadioGroups.Item>

                <Typography className={clsx(rest.disabled && style.label)} variant={'body2'}>
                  {label}
                </Typography>
              </div>
            )
          })}
        </RadioGroups.Root>
      </form>
    )
  }
)
