import { Typography } from '@/components/ui/typography/Typography'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import style from './switcher.module.scss'

type SwitcherProps = {
  className?: string
  data: Data[]
  defaultValue?: string
  disabled?: boolean
}

export type Data = {
  value: string
}

export const Switcher = ({ className, data, defaultValue, disabled }: SwitcherProps) => {
  return (
    <Tabs.Root
      className={clsx(style.tabsRoot, className)}
      defaultValue={defaultValue}
      orientation={'vertical'}
    >
      <Tabs.List aria-label={'tabs example'} className={style.tabsList}>
        {data.map(({ value }, index) => (
          <Tabs.Trigger className={style.tabsTrigger} disabled={disabled} key={index} value={value}>
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
  )
}
