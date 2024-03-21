import { ComponentPropsWithoutRef } from 'react'

import logo from '@/assets/icons/logo.svg'
import { Button } from '@/components/ui/button/Button'
import { Typography } from '@/components/ui/typography/Typography'
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
        <img alt={'logo'} className={style.logo} src={logo} />
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
