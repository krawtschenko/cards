import { FormValues, LoginForm } from '@/components/auth/loginForm/loginForm'
import { useLoginMutation } from '@/services/auth/auth.service'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data)
    } catch (error) {
      /* empty */
    }
  }

  return (
    <div className={style.root}>
      <LoginForm disabled={isLoading} onSubmit={onSubmit} />
    </div>
  )
}
