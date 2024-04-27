import React, { FC } from "react"
import styled from "styled-components"
import { formatDateTime } from "@/utils/formatDateTime"
import snapshot from "@/assets/ic-apps_holders_1714211849971.json"
import { LinkBtn } from "@/components/btns/_index"

const getSnapshot = (): { filename: string; href: string } => {
  const filename = "ic-apps_holders_1714211849971"
  const json = JSON.stringify(snapshot, null, 2)
  const blob = new Blob([json], { type: "application/json" })
  const href = URL.createObjectURL(blob)
  return { filename, href }
}

const Snapshot: FC = (): JSX.Element => {
  const timestamp = 1714211849971
  const snahshotUrl = getSnapshot().href
  const filename = getSnapshot().filename
  const nftMarketplace = "https://marketplace.funded.app/collections/ic-apps"

  return (
    <SnapshotStyled>
      <p>
        <a href={nftMarketplace} target="_blank" rel="noreferrer noopener">
          IC_Apps NFT holders
        </a>{" "}
        snapshot timestamp: {formatDateTime(timestamp)}
      </p>

      <LinkBtn
        $type={"primary"}
        $text={"Download Snapshot"}
        href={snahshotUrl}
        download={filename}
      />
    </SnapshotStyled>
  )
}

const SnapshotStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > p {
    > a {
      text-decoration: underline;
    }
  }
`

export default Snapshot
