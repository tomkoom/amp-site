import React, { FC } from "react"
import { styled } from "styled-components"
import { Metadata as M } from "./Home"
import { E8S } from "../constants/_index"

interface MetadataProps {
  metadata: M
}

const Metadata: FC<MetadataProps> = ({ metadata }): JSX.Element => {
  return (
    <MetadataStyled>
      <div>
        <p className="label">name</p>
        <p className="value">{metadata?.name}</p>
      </div>

      <div>
        <p className="label">symbol</p>
        <p className="value">{metadata?.symbol}</p>
      </div>

      <div>
        <p className="label">fee</p>
        {metadata?.fee && (
          <p className="value">{(metadata.fee / E8S).toFixed(4)}</p>
        )}
      </div>

      <div>
        <p className="label">total supply</p>
        {metadata?.total_supply && (
          <p className="value">{(metadata.total_supply / E8S).toFixed(8)}</p>
        )}
      </div>
    </MetadataStyled>
  )
}

const MetadataStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 0.5rem;

  > div {
    padding: 1rem;
    background-color: var(--underlay1);

    > p.label {
      color: var(--tertiaryColor);
      font-size: var(--fsText);
      font-weight: var(--fwMedium);
    }

    > p.label {
      font-weight: var(--fwMedium);
    }
  }
`

export default Metadata
