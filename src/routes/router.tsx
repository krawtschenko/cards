import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { App, useAuthContext } from '@/app/App'
import { ForgotPage } from '@/pages/auth/forgotPage/forgotPage'
import { LoginPage } from '@/pages/auth/loginPage/loginPage'
import { RegistrationPage } from '@/pages/auth/registrationPage/registrationPage'
import { DecksPage } from '@/pages/decksPage/decksPage'
import { ErrorPage } from '@/pages/errorPage/errorPage'
import { ProfilePage } from '@/pages/profilePage/profilePage'

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
    element: <ForgotPage />,
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
    element: <ProfilePage />,
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

function PublicRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}

function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

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
      { element: <ErrorPage />, path: path.not_found },
      { element: <Navigate to={path.not_found} />, path: '*' },
    ],
    element: <App />,
  },
])
