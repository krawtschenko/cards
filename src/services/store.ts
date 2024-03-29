import { authService } from '@/services/auth/auth.service'
import { decksService } from '@/services/decks/decks.service'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(decksService.middleware, authService.middleware),
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [decksService.reducerPath]: decksService.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
