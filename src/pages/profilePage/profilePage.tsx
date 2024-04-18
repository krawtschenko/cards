import { Profile } from '@/components/profile/profile'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth.service'

import style from './profilePage.module.scss'

export const ProfilePage = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <div className={style.root}>
      <Profile data={data} logout={logout} onSubmit={() => {}} />
    </div>
  )
}
