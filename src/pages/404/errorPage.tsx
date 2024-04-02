import { Link, useNavigate } from 'react-router-dom'

import error from '@/assets/images/404.png'
import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography/typography'
import { path } from '@/routes/path'

import style from './errorPage.module.scss'

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className={style.root}>
      <img alt={'error'} className={style.img} src={error} />
      <Typography className={style.typography} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button
        as={Link}
        className={style.button}
        onClick={navigate(path.decks)}
        text={'Back to home page'}
      />
    </div>
  )
}
