import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { BsThreeDotsVertical } from 'react-icons/bs'

import style from './dropdownMenu.module.scss'

type DropdownMenuProps = {
  data: DropdownMenuData[]
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

type DropdownMenuData = {
  icon: ReactNode
  name: string
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { data, disabled, ...rest } = props

  return (
    <DropdownMenuRadix.Root {...rest}>
      <DropdownMenuRadix.Trigger asChild disabled={disabled}>
        <button className={style.iconButton} data-disabled={disabled}>
          <BsThreeDotsVertical />
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align={'end'} className={style.content} sideOffset={10}>
          <DropdownMenuRadix.Arrow className={style.arrow} />
          {data.map(({ icon, name }, index) => {
            return (
              <div key={index}>
                {index !== 0 && <DropdownMenuRadix.Separator className={style.separator} />}
                <DropdownMenuRadix.Item className={style.item}>
                  {icon}
                  <Typography variant={'caption'}>{name}</Typography>
                </DropdownMenuRadix.Item>
              </div>
            )
          })}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
