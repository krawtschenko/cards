import { LoginForm } from '@/components/auth/loginForm/loginForm'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  return (
    <div className={style.root}>
      <LoginForm onSubmit={() => {}} />
    </div>
  )
}
