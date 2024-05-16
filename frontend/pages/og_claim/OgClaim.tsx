import React, { FC } from "react"
import styled from "styled-components"
import { Btn } from "@/components/btns/_index"
import { DISCORD_URL } from "@/constants/_index"
import { Authenticated } from "./_index"
// import { useDiscord } from "@/hooks/_index"

// state
import { useAppSelector } from "@/hooks/useRedux"
import { selectUserDiscordId } from "@/state/user"
import { selectLoading } from "@/state/loading"

const OgClaim: FC = (): JSX.Element => {
  // const { signInWithDiscord, signOutDiscord } = useDiscord()
  const userDiscordId = useAppSelector(selectUserDiscordId)
  const loading = useAppSelector(selectLoading)

  return (
    <OgClaimStyled>
      <p>
        Sign in with Discord to claim your tokens. Available for{" "}
        <a href={DISCORD_URL} target="_blank" rel="noreferrer noopener">
          cyql Discord
        </a>{" "}
        OG1 and OG2 Roles
      </p>

      <p>Coming soon</p>

      {/* {loading ? (
        <p>...</p>
      ) : (
        <div>
          {userDiscordId ? (
            <Btn
              $type={"secondary"}
              $text={"Sign Out"}
              onClick={signOutDiscord}
            />
          ) : (
            <Btn
              style={{ backgroundColor: "var(--colorDiscord" }}
              $type={"secondary"}
              $text={"Sign in With Discord"}
              onClick={signInWithDiscord}
            />
          )}
        </div>
      )}

      {userDiscordId && <Authenticated userDiscordId={userDiscordId} />} */}
    </OgClaimStyled>
  )
}

const OgClaimStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > p {
    > a {
      padding: 2px 0;
      box-shadow: var(--underline1);
      transition: var(--transition1);

      &:hover {
        color: var(--secondaryColor);
      }
    }
  }
`

export default OgClaim
