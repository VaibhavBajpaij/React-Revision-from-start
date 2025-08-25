import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/CounterSlice'
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})