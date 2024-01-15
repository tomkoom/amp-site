import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Nat "mo:base/Nat";

// ...
import T "./types";
import Ledger "./ledger";

actor {

  let tokenCanister = "fq7md-ayaaa-aaaag-abpea-cai";
  // let tokenCanisterLocal = "";
  let token = actor (tokenCanister) : Ledger.Self;
  let nodeId = "";
  let adminId = "qacbl-dmvvz-7f4rd-qdkp2-drupw-qch3e-35tpx-xl6gh-my5bf-wndbh-xae";
  let e8s = 10 ** 8;
  let og1Amount = 10_000 * e8s;
  let og2Amount = 2_500 * e8s;

  // stable

  stable var usersOg1Entries : [(T.DiscordUserId, T.User)] = [];
  let usersOg1 = HashMap.fromIter<T.DiscordUserId, T.User>(usersOg1Entries.vals(), 10, Text.equal, Text.hash);

  stable var usersOg2Entries : [(T.DiscordUserId, T.User)] = [];
  let usersOg2 = HashMap.fromIter<T.DiscordUserId, T.User>(usersOg2Entries.vals(), 10, Text.equal, Text.hash);

  // funcs

  private func _sendTokens(user : Principal, amount : Nat) : async Ledger.Result {
    let to : Ledger.Account = { owner = user; subaccount = null };

    let transferArg : Ledger.TransferArg = {
      to;
      fee = null;
      memo = null;
      from_subaccount = null;
      created_at_time = null;
      amount
    };
    await token.icrc1_transfer(transferArg)
  };

  public shared ({ caller }) func claim(discordUserId : T.DiscordUserId, principalId : Text, role : Text) : async ?Ledger.Result {
    if (caller != Principal.fromText(nodeId)) return null;
    var user : T.User = { id = ""; claimed = false; claimTimestamp = null };

    if (role == "og1") {
      switch (usersOg1.get(discordUserId)) {
        case (null) return null;
        case (?u) user := u
      }
    };

    if (role == "og2") {
      switch (usersOg2.get(discordUserId)) {
        case (null) return null;
        case (?u) user := u
      }
    };

    if (not user.claimed) {
      let id = Principal.fromText(principalId);
      var amount = 0;

      if (role == "og1") {
        let transferRes = await _sendTokens(id, og1Amount);
        usersOg1.put(discordUserId, { user with claimed = true; claimTimestamp = ?Time.now() });
        return ?transferRes
      };

      if (role == "og2") {
        let transferRes = await _sendTokens(id, og2Amount);
        usersOg2.put(discordUserId, { user with claimed = true; claimTimestamp = ?Time.now() });
        return ?transferRes
      }
    };

    return null
  };

  // query

  public shared query ({ caller }) func claimedOg1UsersNum() : async Text {
    if (caller != Principal.fromText(nodeId)) return "";
    var num = 0;
    for (user in usersOg1.vals()) if (user.claimed) num += 1;
    return Nat.toText(num) # "/" # Nat.toText(usersOg1.size())
  };

  public shared query ({ caller }) func claimedOg2UsersNum() : async Text {
    if (caller != Principal.fromText(nodeId)) return "";
    var num = 0;
    for (user in usersOg2.vals()) if (user.claimed) num += 1;
    return Nat.toText(num) # "/" # Nat.toText(usersOg2.size())
  };

  // state

  system func preupgrade() {
    usersOg1Entries := Iter.toArray(usersOg1.entries());
    usersOg2Entries := Iter.toArray(usersOg2.entries())
  };

  system func postupgrade() {
    usersOg1Entries := [];
    usersOg2Entries := []
  }
}
