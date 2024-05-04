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
      <div>
        <p>
          The vast majority of tokens [%51] has been airdropped to the{" "}
          <a href={nftMarketplace} target="_blank" rel="noreferrer noopener">
            IC_APPS NFT holders
          </a>{" "}
        </p>
        <p>Snapshot timestamp: {formatDateTime(timestamp)}</p>
      </div>

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

  > div {
    > p {
      > a {
        padding: 2px 0;
        box-shadow: var(--underline1);
        /* box-shadow: 0 3px tomato; */
        transition: var(--transition1);

        &:hover {
          color: var(--secondaryColor);
          box-shadow: 0 2px var(--secondaryColor);
        }
      }
    }
  }
`

export default Snapshot
