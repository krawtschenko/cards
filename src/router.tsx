import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { LoginForm } from '@/components/auth/loginForm/loginForm'

const privateRoutes: RouteObject[] = [
  {
    element: <div>Private Route</div>,
    path: '/',
  },
]

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm onSubmit={() => console.log('login')} />,
    path: '/login',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
