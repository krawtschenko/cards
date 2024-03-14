import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { Card } from '@/components/ui/card/Card'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import style from './forgotForm.module.scss'

import { forgotSchema } from './forgotSchema'

export type FormValues = z.infer<typeof forgotSchema>
type ForgotProps = {
  onSubmit: (data: FormValues) => void
}

export const ForgotForm = ({ onSubmit }: ForgotProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotSchema),
  })

  return (
    <Card>
      <Typography className={style.title} variant={'h1'}>
        Forgot your password?
      </Typography>

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
          type={'email'}
        />

        <Typography className={style.info} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button className={style.button} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>

      <Typography className={style.underTitle} variant={'body2'}>
        Did you remember your password?
      </Typography>

      <Typography className={style.signIn} variant={'h4'}>
        Try logging in
      </Typography>
    </Card>
  )
}
