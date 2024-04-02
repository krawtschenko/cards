import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Container } from '@/components/layout/container/container'
import { Loader } from '@/components/ui/loader/loader'
import { LoginPage } from '@/pages/auth/loginPage/loginPage'
import { RegistrationPage } from '@/pages/auth/registrationPage/registrationPage'
import { DecksPage } from '@/pages/decksPage/decksPage'
import { useMeQuery } from '@/services/auth/auth.service'

import { path } from './path'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: path.login,
  },
  {
    element: <RegistrationPage />,
    path: path.registration,
  },
  {
    element: <div></div>,
    path: path.check_email,
  },
  {
    element: <div></div>,
    path: path.forgot_password,
  },
  {
    element: <div></div>,
    path: path.set_new_password,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <></>,
    path: path.cards,
  },
  {
    element: <></>,
    path: path.profile,
  },
  {
    element: <></>,
    path: path.learn,
  },
  {
    element: <DecksPage />,
    path: path.decks,
  },
]

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return data ? (
    <Container>
      <Outlet />
    </Container>
  ) : (
    <Navigate to={path.login} />
  )
}
