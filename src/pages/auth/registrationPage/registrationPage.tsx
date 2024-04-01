import { RegistrationForm } from '@/components/auth/registrationForm/registrationForm'
import { useRegistrationMutation } from '@/services/auth/auth.service'

import style from './registrationPage.module.scss'

export const RegistrationPage = () => {
  const [createUser] = useRegistrationMutation()

  return (
    <div className={style.root}>
      <RegistrationForm onSubmit={createUser} />
    </div>
  )
}
