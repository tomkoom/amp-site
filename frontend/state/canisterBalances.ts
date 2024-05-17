import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"
import type { Token } from "./types/types"

export interface Canister {
  id: string
  balance: Token
}

export interface CanisterBalanceItem {
  [canisterName: string]: Canister
}

interface CanisterBalancesState {
  totalLocked: Token
  canisterBalances: CanisterBalanceItem
}

const initialState: CanisterBalancesState = {
  totalLocked: { e8s: 0 },
  canisterBalances: {},
}

const canisterBalances = createSlice({
  name: "canisterBalances",
  initialState,
  reducers: {
    setCanisterBalance(state, { payload }: PayloadAction<CanisterBalanceItem>) {
      const key = Object.keys(payload)[0]
      const value = payload[key]
      state.canisterBalances[key] = value

      // set total locked
      if (key !== "vault") {
        state.totalLocked.e8s += value.balance.e8s
      }
    },
  },
})

export const selectTotalLocked = (state: RootState) =>
  state.canisterBalances.totalLocked
export const selectCanisterBalances = (state: RootState) =>
  state.canisterBalances.canisterBalances

export const { setCanisterBalance } = canisterBalances.actions
export default canisterBalances.reducer
