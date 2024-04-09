import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: { isAuth: false },
  name: 'auth',
  reducers: {
    auth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
  selectors: {
    selectIsAuth: sliceState => sliceState.isAuth,
  },
})

export const authSlice = slice.reducer
export const authActions = slice.actions
export const authSelectors = slice.selectors
