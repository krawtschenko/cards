import { authSlice } from '@/services/auth/auth.slice'
import { baseApi } from '@/services/common/baseApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    auth: authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
