import React, { FC } from "react"
import { styled } from "styled-components"
import { Metadata as M } from "frontend/types/_index"
import { E8S } from "../../constants/_index"

interface MetadataProps {
  metadata: M
}

const Metadata: FC<MetadataProps> = ({ metadata }): JSX.Element => {
  return (
    <MetadataStyled>
      <div>
        <p className="label">Name</p>
        <p className="value">{metadata?.name ? metadata?.name : "..."}</p>
      </div>

      <div>
        <p className="label">Symbol</p>
        <p className="value">{metadata?.symbol ? metadata?.symbol : "..."}</p>
      </div>

      <div>
        <p className="label">Transaction Fee</p>
        <p className="value">
          {metadata?.fee ? (metadata.fee / E8S).toFixed(4) : "..."}
        </p>
      </div>

      <div>
        <p className="label">Decimals</p>
        <p className="value">
          {metadata?.fee ? String(metadata.decimals) : "..."}
        </p>
      </div>

      <div>
        <p className="label">Total Supply</p>
        <p className="value">
          {metadata?.total_supply
            ? (metadata.total_supply / E8S).toFixed(4)
            : "..."}
        </p>
      </div>

      <div>
        <p className="label">Initial Supply</p>
        <p className="value">{metadata?.total_supply ? "1b" : "..."}</p>
      </div>
    </MetadataStyled>
  )
}

const MetadataStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 0.5rem;

  > div {
    padding: 0.5rem 0.75rem;
    background-color: var(--underlay1);
    border-radius: 0.5rem;

    > p.label {
      color: var(--tertiaryColor);
      font-size: var(--fsText);
      font-weight: var(--fwMedium);
    }

    > p.value {
      font-weight: var(--fwMedium);
    }
  }
`

export default Metadata
