import { useSelector } from 'react-redux'
import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { App } from '@/app/App'
import { Loader } from '@/components/ui/loader/loader'
import { ForgotPage } from '@/pages/auth/forgotPage/forgotPage'
import { LoginPage } from '@/pages/auth/loginPage/loginPage'
import { RegistrationPage } from '@/pages/auth/registrationPage/registrationPage'
import { DecksPage } from '@/pages/decksPage/decksPage'
import { ErrorPage } from '@/pages/errorPage/errorPage'
import { useMeQuery } from '@/services/auth/auth.service'
import { authSelectors } from '@/services/auth/auth.slice'

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

function PublicRoutes() {
  const isAuth = useSelector(authSelectors.selectIsAuth)
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? <Navigate to={path.decks} /> : <Outlet />
}
function PrivateRoutes() {
  const isAuth = useSelector(authSelectors.selectIsAuth)
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? <Outlet /> : <Navigate to={path.login} />
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
