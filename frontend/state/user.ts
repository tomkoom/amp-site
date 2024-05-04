import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"
import { User } from "@supabase/supabase-js"

interface UserState {
  discordUser: User
  discordId: string
}

const initialState: UserState = {
  discordUser: null,
  discordId: "",
}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDiscord(state, { payload }: PayloadAction<User>) {
      state.discordUser = payload
    },
    setUserDiscordId(state, { payload }: PayloadAction<string>) {
      state.discordId = payload
    },
  },
})

export const selectUserDiscord = (state: RootState) => state.user.discordUser
export const selectUserDiscordId = (state: RootState) => state.user.discordId

export const { setUserDiscord, setUserDiscordId } = user.actions
export default user.reducer
