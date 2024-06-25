import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { App } from '@/app/App'
import { Loader } from '@/components/ui/loader/loader'
import { ForgotPage } from '@/pages/auth/forgotPage/forgotPage'
import { LoginPage } from '@/pages/auth/loginPage/loginPage'
import { RegistrationPage } from '@/pages/auth/registrationPage/registrationPage'
import { DecksPage } from '@/pages/decksPage/decksPage'
import { ErrorPage } from '@/pages/errorPage/errorPage'
import { ProfilePage } from '@/pages/profilePage/profilePage'
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
  const { isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

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

// import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'
//
// import { App } from '@/app/App'
// import { LoginPage } from '@/pages/auth/loginPage/loginPage'
// import { DecksPage } from '@/pages/decksPage/decksPage'
// import { useMeQuery } from '@/services/auth/auth.service'
//
// const publicRoutes: RouteObject[] = [
//   {
//     children: [
//       {
//         element: <LoginPage />,
//         path: '/login',
//       },
//     ],
//     element: <Outlet />,
//   },
// ]
//
// const privateRoutes: RouteObject[] = [
//   {
//     element: <DecksPage />,
//     path: '/',
//   },
// ]
//
// export const router = createBrowserRouter([
//   {
//     children: [
//       {
//         children: privateRoutes,
//         element: <PrivateRoutes />,
//       },
//       {
//         children: publicRoutes,
//         element: <PublicRoutes />,
//       },
//     ],
//     element: <App />,
//   },
// ])
//
// function PrivateRoutes() {
//   const { isError, isLoading } = useMeQuery()
//   const isAuthenticated = !isError && !isLoading
//
//   return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
// }
//
// function PublicRoutes() {
//   const { isError, isLoading } = useMeQuery()
//   const isAuthenticated = !isError && !isLoading
//
//   return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
// }
