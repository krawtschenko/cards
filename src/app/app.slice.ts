import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {},
  name: 'app',
  reducers: {},
  selectors: {},
})

export const appSlice = slice.reducer
export const appActions = slice.actions
export const appSelectors = slice.selectors
