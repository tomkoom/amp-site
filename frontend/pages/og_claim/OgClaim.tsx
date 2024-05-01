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

const supabase = createClient(
  STATIC_CONTEXT.SUPABASE_URL,
  STATIC_CONTEXT.SUPABASE_ANON_PUBLIC,
)

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
    // console.log(error)
    refreshSession()
    navigate("/")
  }
  return (
    <OgClaimStyled>
      <p>...</p>
      {/* <p>
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
          $type={"secondary"}
          $text={"Sign in with Discord"}
          onClick={signInWithDiscord}
        />
      )}

      {userDiscordId && <Authenticated userDiscordId={userDiscordId} />} */}
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
