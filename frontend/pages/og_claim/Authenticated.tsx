import React, { FC } from "react"

interface AuthenticatedProps {
  userDiscordId: string
}

const Authenticated: FC<AuthenticatedProps> = ({
  userDiscordId,
}): JSX.Element => {
  return (
    <div>
      <p>Authenticated</p>
      <p>Discord id: {userDiscordId}</p>
    </div>
  )
}

export default Authenticated
