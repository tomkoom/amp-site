import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"

interface UserState {
  discordId: string
}

const initialState: UserState = {
  discordId: "",
}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDiscordId(state, { payload }: PayloadAction<string>) {
      state.discordId = payload
    },
  },
})

export const selectUserDiscordId = (state: RootState) => state.user.discordId

export const { setUserDiscordId } = user.actions
export default user.reducer
