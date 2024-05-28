import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/couterSlides'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})