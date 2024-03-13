import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { ControlledCheckbox } from '@/components/ui/checkbox/ControlledCheckbox'
import { ControlledInput } from '@/components/ui/input/ControlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { loginSchema } from './loginSchema'

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Email'}
        type={'search'}
      />
      <ControlledInput
        control={control}
        label={'Password'}
        name={'password'}
        placeholder={'Password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
      <Button fullWidth type={'submit'}>
        Submit
      </Button>
    </form>
  )
}
