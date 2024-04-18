import { Profile } from '@/components/profile/profile'
import { useLogoutMutation, useMeQuery, useUserUpdateMutation } from '@/services/auth/auth.service'

import style from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const [updateName] = useUserUpdateMutation()

  return (
    <div className={style.root}>
      <Profile data={data} logout={logout} onSubmit={data => updateName(data)} />
    </div>
  )
}
