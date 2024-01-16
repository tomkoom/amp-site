import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type DiscordUserId = string;
export type Result = { 'Ok' : bigint } |
  { 'Err' : TransferError };
export type TransferError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'BadBurn' : { 'min_burn_amount' : bigint } } |
  { 'Duplicate' : { 'duplicate_of' : bigint } } |
  { 'BadFee' : { 'expected_fee' : bigint } } |
  { 'CreatedInFuture' : { 'ledger_time' : bigint } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : bigint } };
export interface _SERVICE {
  'claim' : ActorMethod<[DiscordUserId, string, string], [] | [Result]>,
  'claimedOg1UsersNum' : ActorMethod<[], string>,
  'claimedOg2UsersNum' : ActorMethod<[], string>,
}
