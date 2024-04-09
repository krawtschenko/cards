import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledCheckbox } from '@/components/ui/checkbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { path } from '@/routes/path'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './loginForm.module.scss'

import { loginSchema } from './loginSchema'

export type FormValues = z.infer<typeof loginSchema>
type LoginProps = {
  disabled?: boolean
  onSubmit: (data: FormValues) => void
}

export const LoginForm = ({ disabled, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: 'eugenykravchenko@gmail.com',
      password: '12345',
      rememberMe: true,
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
          <Typography
            as={Link}
            className={style.forgot}
            to={path.forgot_password}
            variant={'body2'}
          >
            Forgot Password?
          </Typography>
        </div>

        <Button
          className={style.button}
          disabled={disabled}
          fullWidth
          text={'Sign In'}
          type={'submit'}
        />
      </form>

      <Typography className={style.underTitle} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography as={Link} className={style.signUp} to={path.registration} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
