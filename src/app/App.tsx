import { Outlet } from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { Header } from '@/components/layout/header/header'
import { useMeQuery } from '@/services/auth/auth.service'

export const App = () => {
  const { data, isError } = useMeQuery()

  return (
    <>
      <Header isAuthenticated={!isError} userData={data} />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
