import { configureStore } from '@reduxjs/toolkit'
import logoReducer from './slices/logoSlice/logoSlice'
import userReducer from './slices/userSlice/userSlice'

export const store = configureStore({
  reducer: {
    logo: logoReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
