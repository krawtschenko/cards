import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Loader } from '@/components/ui/loader/loader'
import { ErrorPage } from '@/pages/404/errorPage'
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

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PublicRoutes() {
  const { isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Navigate to={path.decks} /> : <Outlet />
}

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
