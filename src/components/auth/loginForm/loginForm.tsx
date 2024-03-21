import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledCheckbox } from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './loginForm.module.scss'

import { loginSchema } from './loginSchema'

export type FormValues = z.infer<typeof loginSchema>
type LoginProps = {
  onSubmit: (data: FormValues) => void
}

export const LoginForm = ({ onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Sign In
      </Typography>

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
          type={'email'}
        />

        <ControlledInput
          className={style.password}
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />

        <div className={style.checkboxWrapper}>
          <ControlledCheckbox
            className={style.checkbox}
            control={control}
            label={'Remember Me'}
            name={'rememberMe'}
          />
        </div>

        <div className={style.forgotWrapper}>
          <Typography className={style.forgot} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>

        <Button className={style.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>

      <Typography className={style.underTitle} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography className={style.signIn} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
