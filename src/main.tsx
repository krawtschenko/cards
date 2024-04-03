import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes/router'
import { store } from '@/services/common/store'
import ReactDOM from 'react-dom/client'

import '@/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
