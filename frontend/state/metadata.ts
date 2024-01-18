import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"
import { Metadata } from "../types/_index"

interface MetadataState {
  metadata: Metadata
}

const metadataInitial = {
  name: "",
  symbol: "",
  fee: 0,
  decimals: 0,
  total_supply: 0,
}

const initialState: MetadataState = {
  metadata: metadataInitial,
}

const metadata = createSlice({
  name: "metadata",
  initialState,
  reducers: {
    setMetadata(state, { payload }: PayloadAction<Metadata>) {
      state.metadata = payload
    },
  },
})

const selectMetadata = (state: RootState) => state.metadata.metadata
export { selectMetadata }

export const { setMetadata } = metadata.actions
export default metadata.reducer
