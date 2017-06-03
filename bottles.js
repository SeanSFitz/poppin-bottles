var bottles = {

  purchaseWithDollars: function (wallet) {
    var dollars = wallet.dollars;
    var change = dollars % 2;
    dollars = dollars - change;

    var newBottles = dollars/2;
    wallet.empties += newBottles;
    wallet.caps += newBottles;
    wallet.bottlesPurchased += newBottles;
    wallet.dollars = change;

    return wallet;
  },

  purchaseWithCaps: function (wallet) {
    var caps = wallet.caps;
    var change = caps % 4;
    caps = caps - change;

    var newBottles = caps/4;

    wallet.bottlesFromCaps += newBottles;
    wallet.empties += newBottles;
    wallet.caps = change + newBottles;

    return wallet;
  },

  purchaseWithEmpties: function (wallet) {
    var empties = wallet.empties;
    change = empties % 2;
    empties = empties - change;

    var newBottles = empties/2;

    wallet.caps += newBottles;
    wallet.bottlesFromEmpties += newBottles;
    wallet.empties = change + newBottles;

    return wallet;
  },

  bottleCalculator: function (investment) {

    var wallet = {
      "bottlesPurchased": 0,
      "bottlesFromCaps": 0,
      "bottlesFromEmpties": 0,
      "caps": 0,
      "empties": 0,
      "dollars": investment
    };

    while (wallet.dollars >= 2 || wallet.caps >= 4 || wallet.empties >= 2) {
      this.purchaseWithDollars(wallet);
      this.purchaseWithEmpties(wallet);
      this.purchaseWithCaps(wallet);
    }

    return wallet;
  }
};

module.exports = bottles;