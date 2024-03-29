import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Logo } from '@/assets/icons/logo'
import { Container } from '@/components/layout/container/container'
import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'

import style from './header.module.scss'

type HeaderProps = {
  className?: string
  loggedIn?: boolean
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, HeaderProps>(
  ({ className, loggedIn, ...rest }, ref) => {
    return (
      <header className={clsx(style.header, className)} ref={ref} {...rest}>
        <Container className={style.container}>
          <div className={style.logoWrapper}>
            <Logo />
          </div>
          {loggedIn ? (
            <div className={style.userWrapper}>
              <Typography as={'a'} variant={'h4'}>
                Name
              </Typography>
              {/*<DropdownHeader />*/}
            </div>
          ) : (
            <Button text={'Sign In'} variant={'secondary'} />
          )}
        </Container>
      </header>
    )
  }
)
