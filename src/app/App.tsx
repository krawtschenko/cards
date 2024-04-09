import { Outlet } from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { Header } from '@/components/layout/header/header'
import { useMeQuery } from '@/services/auth/auth.service'

export const App = () => {
  const { data } = useMeQuery()

  return (
    <>
      <Header isAuth={!!data} userData={data} />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
