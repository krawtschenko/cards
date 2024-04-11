import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import style from './switcher.module.scss'

type SwitcherProps = {
  className?: string
  data: Data[]
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export type Data = {
  onClick?: () => void
  value: string
}

export const Switcher = ({ className, data, disabled, label, ...rest }: SwitcherProps) => {
  return (
    <div className={clsx(style.root, className)}>
      <Typography aria-disabled={disabled} className={style.label} variant={'body2'}>
        {label}
      </Typography>

      <Tabs.Root className={style.tabsRoot} orientation={'vertical'} {...rest}>
        <Tabs.List aria-label={'tabs example'} className={style.tabsList}>
          {data.map(({ onClick, value }, index) => (
            <Tabs.Trigger
              className={style.tabsTrigger}
              disabled={disabled}
              key={index}
              onClick={onClick}
              value={value}
            >
              <Typography variant={'body1'}>{value}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
