import React, { FC, useEffect, useState } from "react"
import { styled } from "styled-components"
import { PROJECT_NAME, WHITEPAPER_URL, SCAN_URL } from "@/constants/_index"
import { NavLink } from "react-router-dom"
import { iExternalLink } from "@/components/icons/Icons"
import { useNavigate } from "react-router-dom"

// supabase
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  STATIC_CONTEXT.SUPABASE_URL,
  STATIC_CONTEXT.SUPABASE_ANON_PUBLIC,
)

const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>()

  const refreshSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    // const id = user.identities[0].id
    // console.log("id:", id)
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
    <NavStyled>
      <div className="nav_items">
        <NavLink className="logo" to="/">
          <h1>{PROJECT_NAME}</h1>
        </NavLink>
        <NavLink to="/snapshot">Snapshot</NavLink>

        <a
          className="link"
          href={WHITEPAPER_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Lightpaper {iExternalLink}
        </a>

        <a
          className="link"
          href={SCAN_URL}
          target="_blank"
          rel="noreferrer noopener"
        >
          Scan {iExternalLink}
        </a>

        {user ? (
          <span onClick={signOut}>Sign out</span>
        ) : (
          <span onClick={signInWithDiscord}>Sign in with Discord</span>
        )}

        <NavLink to="/og_claim">OG Claim</NavLink>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  * {
    font-size: var(--fs6);
  }

  > div.nav_items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    > a:not(.logo) {
      color: var(--secondaryColor);
      transition: var(--transition1);

      &:hover {
        color: var(--primaryColor);
      }
    }

    > span {
      color: var(--secondaryColor);
      transition: var(--transition1);
      cursor: pointer;

      &:hover {
        color: var(--primaryColor);
      }
    }
  }
`

export default Nav
