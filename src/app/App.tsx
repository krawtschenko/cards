import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { Header } from '@/components/layout/header/header'
import { useMeQuery } from '@/services/auth/auth.service'
import { authActions } from '@/services/auth/auth.slice'

export const App = () => {
  const { data } = useMeQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(authActions.auth(true))
    }
  })

  return (
    <>
      <Header userData={data} />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
