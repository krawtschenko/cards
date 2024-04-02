import { Container } from '@/components/layout/container/container'
import { Header } from '@/components/layout/header/header'
import { Router } from '@/routes/router'
import { useMeQuery } from '@/services/auth/auth.service'

export const App = () => {
  const { data } = useMeQuery()

  return (
    <>
      <Header loggedIn={!!data} userData={data} />
      <Container>
        <Router />
      </Container>
    </>
  )
}
