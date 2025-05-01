actor {
  public func processClaim(flight: Text, status: Text, delay: Nat) : async Text {
    if (status == "DELAYED" and delay >= 15) {
      // logika pencairan asuransi
      return "Claim approved!";
    } else {
      return "Claim rejected!";
    }
  };
}
