import { useNavigate } from 'react-router-dom'

import { FormValues, LoginForm } from '@/components/auth/loginForm/loginForm'
import { path } from '@/routes/path'
import { useLoginMutation } from '@/services/auth/auth.service'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data)
      navigate(path.decks)
    } catch (error) {}
  }

  return (
    <div className={style.root}>
      <LoginForm disabled={isLoading} onSubmit={onSubmit} />
    </div>
  )
}
