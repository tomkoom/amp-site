import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"

interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = {
  loading: false,
}

const loading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload
    },
  },
})

const selectLoading = (state: RootState) => state.loading.loading
export { selectLoading }

export const { setLoading } = loading.actions
export default loading.reducer
