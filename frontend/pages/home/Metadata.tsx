import React, { FC } from "react"
import { styled } from "styled-components"
import { E8S } from "../../constants/_index"
import { formatNumber } from "@/utils/formatNumber"

// state
import { useAppSelector } from "../../hooks/useRedux"
import { selectMetadata } from "../../state/metadata"

const Metadata: FC = (): JSX.Element => {
  const metadata = useAppSelector(selectMetadata)
  const initialSupply = 268_000_000

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
        <p className="label">Tx Fee</p>
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
            ? formatNumber(metadata.total_supply / E8S)
            : "..."}
        </p>
      </div>

      <div>
        <p className="label">Initial Supply</p>
        <p className="value">
          {metadata?.total_supply ? formatNumber(initialSupply) : "..."}
        </p>
      </div>
    </MetadataStyled>
  )
}

const MetadataStyled = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  > div {
    flex: 1;
    padding: 0.5rem 0.75rem;
    background-color: var(--background);

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
