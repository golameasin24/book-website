import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/BookSlice'
import cartReducer from '../features/BookSlice'
import searchReducer from '../features/SearchSlice'

export const store = configureStore({
  reducer: {
     coutn: counterReducer,
      cart: cartReducer,
         search: searchReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch