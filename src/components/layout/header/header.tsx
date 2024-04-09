import { ComponentPropsWithoutRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { useLogoutMutation } from '@/services/auth/auth.service'
import { authActions, authSelectors } from '@/services/auth/auth.slice'
import { User } from '@/services/auth/auth.types'
import clsx from 'clsx'
import { FiLogOut } from 'react-icons/fi'
import { GoPerson } from 'react-icons/go'

import style from './header.module.scss'

type HeaderProps = {
  className?: string
  userData?: User
} & ComponentPropsWithoutRef<'header'>

export const Header = ({ className, userData, ...rest }: HeaderProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuth = useSelector(authSelectors.selectIsAuth)
  const [logout] = useLogoutMutation()

  const items: DropdownMenuItems[] = [
    { icon: <GoPerson />, name: 'My profile', onClick: () => navigate(path.not_found) },
    {
      icon: <FiLogOut />,
      name: 'Sign Out',
      onClick: async () => {
        try {
          await logout()
          dispatch(authActions.auth(false))
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
        {isAuth ? (
          <div className={style.userWrapper}>
            <Typography className={style.userName} variant={'h4'}>
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
