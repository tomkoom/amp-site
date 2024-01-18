import { configureStore } from "@reduxjs/toolkit"

import template from "./_template"
import loading from "./loading"
import theme from "./theme"
import transactions from "./transactions"
import metadata from "./metadata"

export const store = configureStore({
  reducer: {
    template,
    loading,
    theme,
    transactions,
    metadata,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
