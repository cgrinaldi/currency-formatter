function currencyFormatter(val) {
  if (val < 0) {
    throw new Error('Value must be positive');
  }
  if (typeof val !== 'number') {
    throw new Error('Must provide formatter with a number');
  }

  this.val = val;
};

currencyFormatter.prototype.formatCurrency = function () {
  var integer = Math.floor(this.val);
  var decimal = this.val % 1;
  var num32nds = this.convertTo32nds(decimal);
  return this.padStrings(integer) + '-' + this.padStrings(num32nds);
};

currencyFormatter.prototype.convertTo32nds = function(num) {
  for (var i = 0; i < 32; i++) {
    if (num === i / 32) {
      return i;
    }
  }
};

currencyFormatter.prototype.padStrings = function(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
};

var formatter = new currencyFormatter(1.25);
console.log(formatter.formatCurrency());

module.exports = currencyFormatter;
