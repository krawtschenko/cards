import { Provider } from 'react-redux'

import { Header } from '@/components/layout/header/header'
import { Router } from '@/routes/router'
import { store } from '@/services/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  )
}
