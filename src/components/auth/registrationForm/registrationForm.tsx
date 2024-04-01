import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button'
import { Card } from '@/components/ui/card/card'
import { ControlledInput } from '@/components/ui/input/controlledInput'
import { Typography } from '@/components/ui/typography/typography'
import { Registration } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './registrationForm.module.scss'

import { registrationSchema } from './registrationSchema'

export type FormValues = z.infer<typeof registrationSchema>
type SignUpProps = {
  onSubmit: (data: Registration) => void
}

export const RegistrationForm = ({ onSubmit }: SignUpProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(registrationSchema),
  })

  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Sign Up
      </Typography>

      <form
        className={style.form}
        onSubmit={handleSubmit(data =>
          onSubmit({
            email: data.email,
            password: data.password,
          })
        )}
      >
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

        <ControlledInput
          className={style.password}
          control={control}
          label={'Confirm Password'}
          name={'confirm'}
          placeholder={'Confirm Password'}
          type={'password'}
        />

        <Button className={style.button} fullWidth text={'Sign Up'} type={'submit'} />
      </form>

      <Typography className={style.underTitle} variant={'body2'}>
        Already have an account?
      </Typography>

      <Typography className={style.signIn} variant={'h4'}>
        Sign In
      </Typography>
    </Card>
  )
}
