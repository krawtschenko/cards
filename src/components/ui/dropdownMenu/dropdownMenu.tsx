import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { BsThreeDotsVertical } from 'react-icons/bs'

import style from './dropdownMenu.module.scss'

type DropdownMenuProps = { avatar?: string; className?: string } & ComponentPropsWithoutRef<
  typeof DropdownMenuRadix.Root
>

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { avatar, children, className, ...rest } = props
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenuRadix.Root onOpenChange={setOpen} {...rest}>
      <DropdownMenuRadix.Trigger asChild>
        {avatar ? (
          <button className={style.iconButtonAvatar}>
            <img alt={'avatar'} src={avatar} />
          </button>
        ) : (
          <button className={style.iconButton}>
            <BsThreeDotsVertical />
          </button>
        )}
      </DropdownMenuRadix.Trigger>
    </DropdownMenuRadix.Root>
  )
}
