import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Input } from '@/components/ui/input/Input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} label={'email'} />
      <Input {...register('password')} label={'password'} />
      <Checkbox {...register('rememberMe')} label={'remember'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
