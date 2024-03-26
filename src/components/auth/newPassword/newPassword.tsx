import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/loginForm/loginSchema'
import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './newPassword.module.scss'

import { newPasswordSchema } from './newPasswordSchema'

export type FormValues = z.infer<typeof newPasswordSchema>
type NewPasswordProps = {
  onSubmit: (data: FormValues) => void
}

export const NewPassword = ({ onSubmit }: NewPasswordProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Create new password
      </Typography>

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />

        <Typography className={style.underTitle} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button className={style.button} fullWidth text={'Create New Password'} type={'submit'} />
      </form>
    </Card>
  )
}
