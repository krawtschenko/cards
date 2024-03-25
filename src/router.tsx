import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { LoginForm } from '@/components/auth/loginForm/loginForm'
import { Decks } from '@/pages/decks/decks'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Decks />,
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

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
