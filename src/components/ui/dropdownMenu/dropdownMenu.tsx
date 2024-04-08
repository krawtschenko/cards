import { ComponentPropsWithoutRef, ReactNode } from 'react'

import altAvatar from '@/assets/images/photo.png'
import { Typography } from '@/components/ui/typography/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { BsThreeDotsVertical } from 'react-icons/bs'

import style from './dropdownMenu.module.scss'

type DropdownMenuProps = {
  className?: string
  data: DropdownMenuData[]
  disabled?: boolean
  profileData?: ProfileData
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

type DropdownMenuData = {
  icon: ReactNode
  name: string
}

type ProfileData = {
  avatar?: string
  mail: string
  name: string
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { className, data, disabled, profileData, ...rest } = props

  if (profileData) {
    return (
      <div className={className}>
        <DropdownMenuRadix.Root {...rest}>
          <DropdownMenuRadix.Trigger asChild disabled={disabled}>
            <button className={style.avatarButton} data-disabled={disabled}>
              <img alt={'avatar'} src={profileData?.avatar ?? altAvatar} />
            </button>
          </DropdownMenuRadix.Trigger>

          <DropdownMenuRadix.Portal>
            <DropdownMenuRadix.Content
              align={'end'}
              className={clsx(style.content, style.avatarContent)}
              sideOffset={10}
            >
              <DropdownMenuRadix.Arrow className={style.arrow} />
              <DropdownMenuRadix.Item className={style.itemUserInfo} disabled>
                <img alt={'avatar'} src={profileData?.avatar ?? altAvatar} />
                <div className={style.info}>
                  <Typography variant={'subtitle2'}>{profileData?.name}</Typography>
                  <Typography className={style.mail} variant={'caption'}>
                    {profileData?.mail}
                  </Typography>
                </div>
              </DropdownMenuRadix.Item>
              {data.map(({ icon, name }, index) => {
                return (
                  <div key={index}>
                    <DropdownMenuRadix.Separator className={style.separator} />
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
      </div>
    )
  } else {
    return (
      <div className={className}>
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
      </div>
    )
  }
}
