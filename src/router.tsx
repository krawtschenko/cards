import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { LoginPage } from '@/pages/auth/loginPage/loginPage'
import { RegistrationPage } from '@/pages/auth/registrationPage/registrationPage'
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
    element: (
      <Container>
        <LoginPage />
      </Container>
    ),
    path: '/login',
  },
  {
    element: (
      <Container>
        <RegistrationPage />
      </Container>
    ),
    path: '/registration',
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
