import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { ControlledCheckbox } from '@/components/ui/checkbox/ControlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { loginSchema } from './loginSchema'

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        control={control}
        error={errors.email?.message}
        label={'email'}
        name={'email'}
      />
      <ControlledInput
        control={control}
        error={errors.password?.message}
        label={'password'}
        name={'password'}
      />
      <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
