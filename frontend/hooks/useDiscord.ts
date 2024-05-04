import { useNavigate } from "react-router-dom"

// supabase
import { createClient } from "@supabase/supabase-js"

// state
import { useAppDispatch } from "@/hooks/useRedux"
import { setUserDiscordId, setUserDiscord } from "@/state/user"
import { setLoading } from "@/state/loading"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_PUBLIC = import.meta.env.VITE_SUPABASE_ANON_PUBLIC
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC)

export const useDiscord = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const refreshDiscordSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const id = user.identities[0]?.id
      dispatch(setUserDiscord(user))
      dispatch(setUserDiscordId(id))
    } else {
      dispatch(setUserDiscord(null))
      dispatch(setUserDiscordId(""))
    }
  }

  const signInWithDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  const signOutDiscord = async () => {
    dispatch(setLoading(true))

    try {
      await supabase.auth.signOut()
      await refreshDiscordSession()
      navigate("/")
    } catch (e) {
      throw new Error(e)
    } finally {
      dispatch(setLoading(false))
    }
  }

  return { refreshDiscordSession, signInWithDiscord, signOutDiscord }
}
