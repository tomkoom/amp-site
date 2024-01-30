import { Metadata } from "../types/_index"
import { serializeBigint } from "../utils/serializeBigint"
import { _SERVICE } from "../idl/icrc1_ledger_types"

// state
import { useAppDispatch } from "../hooks/useRedux"
import { setMetadata } from "../state/metadata"
import { setTransactions } from "../state/transactions"

const useToken = () => {
  const dispatch = useAppDispatch()

  const refreshMetadata = async (token: _SERVICE): Promise<void> => {
    if (!token) return
    const metadata: Metadata = {
      name: "",
      symbol: "",
      fee: 0,
      decimals: 0,
      total_supply: 0,
    }

    await token.icrc1_name().then((res) => (metadata.name = res))
    await token.icrc1_symbol().then((res) => (metadata.symbol = res))
    await token.icrc1_fee().then((res) => (metadata.fee = Number(res)))
    await token.icrc1_decimals().then((res) => (metadata.decimals = res))
    await token
      .icrc1_total_supply()
      .then((res) => (metadata.total_supply = Number(res)))

    dispatch(setMetadata(metadata))
  }

  const refreshTransactions = async (token: _SERVICE): Promise<void> => {
    const arg = { start: BigInt(0), length: BigInt(1000) }
    await token.get_transactions(arg).then((res) => {
      const serialized = serializeBigint(res.transactions)
      dispatch(setTransactions(serialized))
    })
  }

  return { refreshMetadata, refreshTransactions }
}

export default useToken
