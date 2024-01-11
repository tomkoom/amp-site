import type { Principal } from "@dfinity/principal"
import type { ActorMethod } from "@dfinity/agent"

export interface Account {
  owner: Principal
  subaccount: [] | [Uint8Array | number[]]
}
export interface ArchivedTransactionRange {
  callback: [Principal, string]
  start: bigint
  length: bigint
}
export interface Burn {
  from: Account
  memo: [] | [Uint8Array | number[]]
  created_at_time: [] | [bigint]
  amount: bigint
}
export interface GetTransactionsRequest {
  start: bigint
  length: bigint
}
export interface GetTransactionsResponse {
  first_index: bigint
  log_length: bigint
  transactions: Array<Transaction>
  archived_transactions: Array<ArchivedTransactionRange>
}
export interface HttpRequest {
  url: string
  method: string
  body: Uint8Array | number[]
  headers: Array<[string, string]>
}
export interface HttpResponse {
  body: Uint8Array | number[]
  headers: Array<[string, string]>
  status_code: number
}
export interface Mint {
  to: Account
  memo: [] | [Uint8Array | number[]]
  created_at_time: [] | [bigint]
  amount: bigint
}
export type Result = { Ok: bigint } | { Err: TransferError }
export interface StandardRecord {
  url: string
  name: string
}
export interface Transaction {
  burn: [] | [Burn]
  kind: string
  mint: [] | [Mint]
  timestamp: bigint
  transfer: [] | [Transfer]
}
export interface Transfer {
  to: Account
  fee: [] | [bigint]
  from: Account
  memo: [] | [Uint8Array | number[]]
  created_at_time: [] | [bigint]
  amount: bigint
}
export interface TransferArg {
  to: Account
  fee: [] | [bigint]
  memo: [] | [Uint8Array | number[]]
  from_subaccount: [] | [Uint8Array | number[]]
  created_at_time: [] | [bigint]
  amount: bigint
}
export type TransferError =
  | {
      GenericError: { message: string; error_code: bigint }
    }
  | { TemporarilyUnavailable: null }
  | { BadBurn: { min_burn_amount: bigint } }
  | { Duplicate: { duplicate_of: bigint } }
  | { BadFee: { expected_fee: bigint } }
  | { CreatedInFuture: { ledger_time: bigint } }
  | { TooOld: null }
  | { InsufficientFunds: { balance: bigint } }
export type Value =
  | { Int: bigint }
  | { Nat: bigint }
  | { Blob: Uint8Array | number[] }
  | { Text: string }
export interface _SERVICE {
  get_transactions: ActorMethod<
    [GetTransactionsRequest],
    GetTransactionsResponse
  >
  http_request: ActorMethod<[HttpRequest], HttpResponse>
  icrc1_balance_of: ActorMethod<[Account], bigint>
  icrc1_decimals: ActorMethod<[], number>
  icrc1_fee: ActorMethod<[], bigint>
  icrc1_metadata: ActorMethod<[], Array<[string, Value]>>
  icrc1_minting_account: ActorMethod<[], [] | [Account]>
  icrc1_name: ActorMethod<[], string>
  icrc1_supported_standards: ActorMethod<[], Array<StandardRecord>>
  icrc1_symbol: ActorMethod<[], string>
  icrc1_total_supply: ActorMethod<[], bigint>
  icrc1_transfer: ActorMethod<[TransferArg], Result>
}
