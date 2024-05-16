import { Metadata } from "../types/_index"
import { serializeBigint } from "../utils/serializeBigint"
import { _SERVICE as _LEDGER_SERVICE } from "../idl/icrc1_ledger_types"
import { CANISTERS } from "@/constants/_index"
import { Principal } from "@dfinity/principal"
import { Account } from "../idl/icrc1_ledger_types"

// state
import { useAppDispatch } from "@/hooks/useRedux"
import { setMetadata } from "@/state/metadata"
import { setTransactions } from "@/state/transactions"
import { Canister, setCanisterBalance } from "@/state/canisterBalances"

const useToken = () => {
  const dispatch = useAppDispatch()

  const refreshMetadata = async (token: _LEDGER_SERVICE): Promise<void> => {
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

  const refreshCanisterBalances = async (
    tokenLedger: _LEDGER_SERVICE,
  ): Promise<void> => {
    const getBalance = async (canister: {
      name: string
      id: string
    }): Promise<void> => {
      const acc: Account = {
        owner: Principal.fromText(canister.id),
        subaccount: [],
      }

      try {
        const balanceE8s = await tokenLedger.icrc1_balance_of(acc)
        const name = canister.name
        const data = {
          id: canister.id,
          balance: { e8s: Number(balanceE8s) },
        }
        dispatch(setCanisterBalance({ [name]: data }))
      } catch (error) {
        throw new Error(error)
      }
    }

    const promises = CANISTERS.map((canister) => getBalance(canister))
    await Promise.all(promises)
  }

  const refreshTransactions = async (token: _LEDGER_SERVICE): Promise<void> => {
    const arg = { start: BigInt(0), length: BigInt(1000) }
    await token.get_transactions(arg).then((res) => {
      const serialized = serializeBigint(res.transactions)
      dispatch(setTransactions(serialized))
    })
  }

  return { refreshMetadata, refreshCanisterBalances, refreshTransactions }
}

export default useToken
