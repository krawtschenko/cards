import emailIcon from '@/assets/icons/email_icon.png'
import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { Typography } from '@/components/ui/typography/Typography'

import style from './checkForm.module.scss'

type CheckFormProps = {
  email: string
}

export const CheckForm = ({ email }: CheckFormProps) => {
  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Check Email
      </Typography>

      <img alt={'email'} className={style.icon} src={emailIcon} />

      <Typography className={style.underTitle} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>

      <Button as={'a'} className={style.button} fullWidth type={'submit'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
