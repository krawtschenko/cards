import { ForgotForm } from '@/components/auth/forgotForm/forgotForm'

import style from './forgotPage.module.scss'

export const ForgotPage = () => {
  return (
    <div className={style.root}>
      <ForgotForm onSubmit={() => {}} />
    </div>
  )
}
