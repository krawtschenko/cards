// import { useDispatch } from 'react-redux'

import { FormValues, LoginForm } from '@/components/auth/loginForm/loginForm'
import { useLoginMutation } from '@/services/auth/auth.service'
// import { authActions } from '@/services/auth/auth.slice'

import { useNavigate } from 'react-router-dom'

import { path } from '@/routes/path'

import style from './loginPage.module.scss'

export const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation()
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data)
      // dispatch(authActions.auth(true))
      navigate(path.decks)
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
