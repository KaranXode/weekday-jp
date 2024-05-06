import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filterReducer'


export const store = configureStore({
    reducer: {
      filters: filtersReducer,
    },
  })