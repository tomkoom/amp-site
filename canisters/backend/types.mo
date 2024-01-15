import Principal "mo:base/Principal";
import Int64 "mo:base/Int64";
import Time "mo:base/Time";
import Ledger "ledger";

module {
  public type DiscordUserId = Text;
  public type Tokens = Ledger.Tokens; // { e8s: Nat64 }
  public type User = {
    id : Text;
    claimed : Bool;
    claimTimestamp : ?Int
  }
}
