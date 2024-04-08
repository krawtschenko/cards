import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Logo } from '@/assets/icons/logo'
import { Container } from '@/components/layout/container/container'
import { Button } from '@/components/ui/button/button'
import {
  DropdownMenu,
  DropdownMenuItems,
  ProfileData,
} from '@/components/ui/dropdownMenu/dropdownMenu'
import { Typography } from '@/components/ui/typography/typography'
import { path } from '@/routes/path'
import { User } from '@/services/auth/auth.types'
import clsx from 'clsx'
import { FiLogOut } from 'react-icons/fi'
import { GoPerson } from 'react-icons/go'

import style from './header.module.scss'

type HeaderProps = {
  className?: string
  loggedIn?: boolean
  userData?: User
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, HeaderProps>(
  ({ className, loggedIn, userData, ...rest }, ref) => {
    const navigate = useNavigate()
    const items: DropdownMenuItems[] = [
      { icon: <GoPerson />, name: 'My profile', onClick: () => navigate(path.not_found) },
      { icon: <FiLogOut />, name: 'Sign Out' },
    ]
    const profileData: ProfileData = {
      avatar: userData?.avatar,
      mail: userData?.email,
      name: userData?.name,
    }

    return (
      <header className={clsx(style.header, className)} ref={ref} {...rest}>
        <Container className={style.container}>
          <NavLink className={style.logoWrapper} to={path.decks}>
            <Logo />
          </NavLink>
          {loggedIn ? (
            <div className={style.userWrapper}>
              <Typography as={'a'} className={style.userName} variant={'h4'}>
                {userData?.name}
              </Typography>
              <DropdownMenu items={items} profileData={profileData} />
            </div>
          ) : (
            <Button text={'Sign In'} variant={'secondary'} />
          )}
        </Container>
      </header>
    )
  }
)
