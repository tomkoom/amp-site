export { default as FLEX_LOGO } from "@/assets/flex_logo_white.svg"

// ...
export const HOST_IC = "https://icp0.io"
export const E8S = 10 ** 8
export const PROJECT_NAME = "FLEX"
export const TOKEN_SYMBOL = "FLEX"

// token
export const LEDGER_ID = "qn35o-kiaaa-aaaag-aciiq-cai"
export const CANDID_URL = `https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/?id=${LEDGER_ID}`
export const LIQUIDITY_POOL_URL = `https://app.icpswap.com/swap/liquidity/add/ryjl3-tyaaa-aaaaa-aaaba-cai/${LEDGER_ID}/3000`

// token canister ids
export const MINTER = "ci35a-cqaaa-aaaag-acmvq-cai"
// ...
export const VAULT = "qk232-hqaaa-aaaag-aciia-cai"
export const FUND = "cp23u-piaaa-aaaag-acmva-cai"
export const FUND_PROMO = "cbyw4-uyaaa-aaaag-acmua-cai"
export const TREASURY = "vne52-waaaa-aaaag-aciva-cai"
export const CANISTERS = [
  { name: "vault", id: "qk232-hqaaa-aaaag-aciia-cai" },
  { name: "fund", id: "cp23u-piaaa-aaaag-acmva-cai" },
  { name: "fundPromo", id: "cbyw4-uyaaa-aaaag-acmua-cai" },
  { name: "treasury", id: "vne52-waaaa-aaaag-aciva-cai" },
]

// links
export const TOKEN_LEDGER_GITHUB_URL = "https://github.com/tomkoom/flex_ledger"
export const TOKEN_UI_GITHUB_URL = "https://github.com/tomkoom/flex_ui"
export const DISCORD_URL = "https://discord.gg/pvaBPqcwA2"
export const TWITTER_URL = "https://twitter.com/_flexcoin"
export const SCAN_URL = `https://ic.house/token/${LEDGER_ID}`
export const SWAP_URL = `https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=${LEDGER_ID}`
export const ADD_LIQUIDITY_URL =
  "https://app.icpswap.com/swap/liquidity/add/ryjl3-tyaaa-aaaaa-aaaba-cai/qn35o-kiaaa-aaaag-aciiq-cai"
export const ICPSWAP_LP_STATS_URL =
  "https://info.icpswap.com/swap/pool/details/dwdrx-waaaa-aaaag-qjvaa-cai"
export const WHITEPAPER_URL =
  "https://tomkoom.notion.site/FLEX-whitepaper-bed7b18b77e2427797b05e72957709d2?pvs=4"
