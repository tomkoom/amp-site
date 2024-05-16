import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"
import type { Token } from "./types/types"

export interface Canister {
  id: string
  balance: Token
}

interface CanisterBalancesState {
  [canisterName: string]: Canister
}

const initialState: CanisterBalancesState = {}

const canisterBalances = createSlice({
  name: "canisterBalances",
  initialState,
  reducers: {
    setCanisterBalance(
      state,
      { payload }: PayloadAction<CanisterBalancesState>,
    ) {
      const key = Object.keys(payload)[0]
      const value = payload[key]
      state[key] = value
    },
  },
})

export const selectCanisterBalances = (state: RootState) =>
  state.canisterBalances

export const { setCanisterBalance } = canisterBalances.actions
export default canisterBalances.reducer
