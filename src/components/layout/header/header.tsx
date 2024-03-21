import { ComponentPropsWithoutRef } from 'react'

import { Logo } from '@/assets/icons/logo'
import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'

import style from './header.module.scss'

type HeaderProps = {
  className?: string
  loggedIn?: boolean
} & ComponentPropsWithoutRef<'header'>

export const Header = ({ className, loggedIn, ...rest }: HeaderProps) => {
  return (
    <header {...rest} className={clsx(style.header, className)}>
      <div className={style.logoWrapper}>
        <Logo />
      </div>
      {loggedIn ? (
        <div className={style.userWrapper}>
          <Typography as={'a'} variant={'h4'}>
            Slawomir
          </Typography>
          {/*<DropdownHeader />*/}
        </div>
      ) : (
        <Button variant={'secondary'}>Sign In</Button>
      )}
    </header>
  )
}
