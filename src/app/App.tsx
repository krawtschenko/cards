import { Outlet, useOutletContext } from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { Header } from '@/components/layout/header/header'
import { Loader } from '@/components/ui/loader/loader'
import { useMeQuery } from '@/services/auth/auth.service'

type AuthContext = {
  isAuthenticated: boolean
}

export const App = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header isAuthenticated={!isError} userData={data} />
      <Container>
        <Outlet context={{ isAuthenticated } satisfies AuthContext} />
      </Container>
    </>
  )
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}
