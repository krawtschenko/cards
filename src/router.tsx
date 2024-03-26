import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { LoginForm } from '@/components/auth/loginForm/loginForm'
import { Container } from '@/components/layout/container/container'
import { DecksPage } from '@/pages/decksPage/decksPage'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <DecksPage />,
        path: '/',
      },
    ],
    element: <PrivateRoutes />,
  },
  {
    // eslint-disable-next-line no-console
    element: <LoginForm onSubmit={() => console.log('login')} />,
    path: '/login',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? (
    <Container>
      <Outlet />
    </Container>
  ) : (
    <Navigate to={'/login'} />
  )
}
