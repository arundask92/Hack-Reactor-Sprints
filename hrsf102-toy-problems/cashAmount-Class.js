class CashAmount {
  constructor(amount) {
    this.value = amount;
  }

  //converts amount to pennies
  totalInPennies() {
    return this.value * 100;
  }

  //adds amount to value
  addDoubleAmount(addedValue) {
    return (this.value = (this.value * 100 + addedValue * 100) / 100);
  }

  //returns object with denominations from 100 to pennies
  quantityOfEachDenomination() {
    let dollars = [
      ["hundreds", 100],
      ["fifties", 50],
      ["twenties", 20],
      ["tens", 10],
      ["fives", 5],
      ["ones", 1]
    ];
    let cents = [
      ["quarters", 25],
      ["dimes", 10],
      ["nickels", 5],
      ["pennies", 1]
    ];
    var billNCents = this.toDoubleString()
      .split(".")
      .map(function(money) {
        return Number(money);
      });
    var counter = 0;
    var result = {};
    if (billNCents.length > 1) {
      billNCents[1] = (this.value - billNCents[0]) * 100;
      var centValue = billNCents[1];
      for (var i = 0; i < cents.length; i++) {
        result[cents[i][0]] = 0;
        while (centValue - cents[i][1] > 0) {
          result[cents[i][0]]++;
          centValue = centValue - cents[i][1];
        }
      }
    }
    var dollarValue = billNCents[0];
    for (var j = 0; j < dollars.length; j++) {
      result[dollars[j][0]] = 0;
      while (dollarValue - dollars[j][1] > 0) {
        result[dollars[j][0]]++;
        dollarValue = dollarValue - dollars[j][1];
      }
    }
    return result;
  }

  //returns value
  toDouble() {
    return this.value;
  }

  //returns string of value
  toDoubleString() {
    return String(this.value);
  }
}

// test

const cash = new CashAmount(0.1);
cash.addDoubleAmount(0.2);
console.log(cash.totalInPennies() === 30);
