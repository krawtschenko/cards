import { ComponentPropsWithoutRef, ReactNode } from 'react'

import altAvatar from '@/assets/images/photo.png'
import { Typography } from '@/components/ui/typography/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { BsThreeDotsVertical } from 'react-icons/bs'

import style from './dropdownMenu.module.scss'

type DropdownMenuProps = {
  className?: string
  disabled?: boolean
  items: DropdownMenuItems[]
  profileData?: ProfileData
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export type DropdownMenuItems = {
  icon: ReactNode
  name: string
  onClick?: () => void
}

export type ProfileData = {
  avatar: null | string | undefined
  mail: string | undefined
  name: string | undefined
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { className, disabled, items, profileData, ...rest } = props

  return (
    <div className={className}>
      <DropdownMenuRadix.Root {...rest}>
        <DropdownMenuRadix.Trigger asChild disabled={disabled}>
          <button
            className={clsx(profileData ? style.avatarButton : style.iconButton)}
            data-disabled={disabled}
          >
            {profileData ? (
              <img alt={'avatar'} src={profileData?.avatar ?? altAvatar} />
            ) : (
              <BsThreeDotsVertical />
            )}
          </button>
        </DropdownMenuRadix.Trigger>

        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content
            align={'end'}
            className={clsx(style.content, style.avatarContent)}
            sideOffset={10}
          >
            <DropdownMenuRadix.Arrow className={style.arrow} />
            {profileData ? (
              <>
                <DropdownMenuRadix.Item className={style.itemUserInfo} disabled>
                  <img alt={'avatar'} src={profileData?.avatar ?? altAvatar} />
                  <div className={style.info}>
                    <Typography variant={'subtitle2'}>{profileData?.name}</Typography>
                    <Typography className={style.mail} variant={'caption'}>
                      {profileData?.mail}
                    </Typography>
                  </div>
                </DropdownMenuRadix.Item>
                {items.map(({ icon, name, onClick }, index) => {
                  return (
                    <div key={index}>
                      <DropdownMenuRadix.Separator className={style.separator} />
                      <DropdownMenuRadix.Item className={style.item} onClick={onClick}>
                        {icon}
                        <Typography variant={'caption'}>{name}</Typography>
                      </DropdownMenuRadix.Item>
                    </div>
                  )
                })}
              </>
            ) : (
              <>
                {items.map(({ icon, name }, index) => {
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
              </>
            )}
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    </div>
  )
}
