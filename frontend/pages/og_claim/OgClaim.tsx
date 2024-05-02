import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Btn } from "@/components/btns/_index"
import { DISCORD_URL } from "@/constants/_index"
import { Authenticated } from "./_index"

// supabase
import { createClient } from "@supabase/supabase-js"

// state
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { setUserDiscordId, selectUserDiscordId } from "@/state/user"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_PUBLIC = import.meta.env.VITE_SUPABASE_ANON_PUBLIC

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC)

const OgClaim: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState<any>()
  const userDiscordId = useAppSelector(selectUserDiscordId)

  const refreshSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const id = user.identities[0].id
    dispatch(setUserDiscordId(id))
    setUser(user)
  }

  useEffect(() => {
    refreshSession()
  }, [])

  const signInWithDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    refreshSession()
    navigate("/")

    if (error) {
      console.log(error)
    }
  }

  return (
    <OgClaimStyled>
      <p>
        Sign in with Discord to claim your tokens. Available for{" "}
        <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          cyql Discord
        </a>{" "}
        OG1 and OG2 Roles
      </p>
      {user ? (
        <Btn $type={"secondary"} $text={"Sign out"} onClick={signOut} />
      ) : (
        <Btn
          style={{ backgroundColor: "var(--colorDiscord" }}
          $type={"secondary"}
          $text={"Sign in with Discord"}
          onClick={signInWithDiscord}
        />
      )}

      {userDiscordId && <Authenticated userDiscordId={userDiscordId} />}
    </OgClaimStyled>
  )
}

const OgClaimStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    > a {
      text-decoration: underline;
    }
  }
`

export default OgClaim
