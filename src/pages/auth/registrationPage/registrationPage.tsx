import { useNavigate } from 'react-router-dom'

import { RegistrationForm } from '@/components/auth/registrationForm/registrationForm'
import { path } from '@/routes/path'
import { useRegistrationMutation } from '@/services/auth/auth.service'
import { Registration } from '@/services/auth/auth.types'

import style from './registrationPage.module.scss'

export const RegistrationPage = () => {
  const [createUser] = useRegistrationMutation()
  const navigate = useNavigate()

  const onSubmit = async (data: Registration) => {
    try {
      await createUser(data)
      navigate(path.login)
    } catch (error) {}
  }

  return (
    <div className={style.root}>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  )
}
