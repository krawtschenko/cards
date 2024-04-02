import { useNavigate } from 'react-router-dom'

import { FormValues, LoginForm } from '@/components/auth/loginForm/loginForm'
import { path } from '@/routes/path'
import { useLoginMutation } from '@/services/auth/auth.service'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const onSubmit = (data: FormValues) => {
    login(data).then(() => navigate(path.decks))
  }

  return (
    <div className={style.root}>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
