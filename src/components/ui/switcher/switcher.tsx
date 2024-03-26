import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import style from './switcher.module.scss'

type SwitcherProps = {
  className?: string
  data: Data[]
  defaultValue?: string
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export type Data = {
  value: string
}

export const Switcher = forwardRef<ElementRef<typeof Tabs.Root>, SwitcherProps>(
  ({ className, data, disabled, label, ...rest }, ref) => {
    return (
      <div className={clsx(style.root, className)}>
        {label && (
          <Typography aria-disabled={disabled} className={style.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Tabs.Root className={style.tabsRoot} orientation={'vertical'} ref={ref} {...rest}>
          <Tabs.List aria-label={'tabs example'} className={style.tabsList}>
            {data.map(({ value }, index) => (
              <Tabs.Trigger
                className={style.tabsTrigger}
                disabled={disabled}
                key={index}
                value={value}
              >
                <Typography variant={'body1'}>{value}</Typography>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {/*{data.map(({ value }, index) => (*/}
          {/*  <Tabs.Content key={index} value={value}>*/}
          {/*    Tab {value} content*/}
          {/*  </Tabs.Content>*/}
          {/*))}*/}
        </Tabs.Root>
      </div>
    )
  }
)
