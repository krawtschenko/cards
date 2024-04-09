import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: { isLoading: false },
  name: 'app',
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
  selectors: {
    selectIsLoading: sliceState => sliceState.isLoading,
  },
})

export const appSlice = slice.reducer
export const appActions = slice.actions
export const appSelectors = slice.selectors
