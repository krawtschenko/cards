import { ComponentPropsWithoutRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

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
import { useLogoutMutation } from '@/services/auth/auth.service'
import { User } from '@/services/auth/auth.types'
import clsx from 'clsx'
import { FiLogOut } from 'react-icons/fi'
import { GoPerson } from 'react-icons/go'

import style from './header.module.scss'

type HeaderProps = {
  className?: string
  isAuthenticated?: boolean
  userData?: User
} & ComponentPropsWithoutRef<'header'>

export const Header = ({ className, isAuthenticated, userData, ...rest }: HeaderProps) => {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const items: DropdownMenuItems[] = [
    { icon: <GoPerson />, name: 'My profile', onClick: () => navigate(path.profile) },
    {
      icon: <FiLogOut />,
      name: 'Sign Out',
      onClick: async () => {
        try {
          await logout()
        } catch (error) {
          /* empty */
        }
      },
    },
  ]
  const profileData: ProfileData = {
    avatar: userData?.avatar,
    mail: userData?.email,
    name: userData?.name,
  }

  return (
    <header className={clsx(style.header, className)} {...rest}>
      <Container className={style.container}>
        <NavLink className={style.logoWrapper} to={path.decks}>
          <Logo />
        </NavLink>
        {isAuthenticated ? (
          <div className={style.userWrapper}>
            <Typography className={style.userName} variant={'h4'}>
              {userData?.name}
            </Typography>
            <DropdownMenu items={items} profileData={profileData} />
          </div>
        ) : (
          <Button as={Link} text={'Sign In'} to={path.login} variant={'secondary'} />
        )}
      </Container>
    </header>
  )
}
