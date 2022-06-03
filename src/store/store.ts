import { configureStore } from '@reduxjs/toolkit'
import brandReducer from './slices/brandSlice/brandSlice'
import userReducer from './slices/userSlice/userSlice'

export const store = configureStore({
  reducer: {
    brand: brandReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
