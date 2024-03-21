import { Provider } from 'react-redux'

import { Header } from '@/components/layout/header/Header'
import { Router } from '@/router'
import { store } from '@/services/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  )
}
