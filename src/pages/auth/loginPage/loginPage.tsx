import { LoginForm } from '@/components/auth/loginForm/loginForm'
import { useLoginMutation } from '@/services/auth/auth.service'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  const [login] = useLoginMutation()

  return (
    <div className={style.root}>
      <LoginForm onSubmit={login} />
    </div>
  )
}
