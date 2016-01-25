var helpers = require('./helpers.js');

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
  var num32nds = helpers.convertTo32nds(decimal);
  return helpers.convertAndPadString(integer) + '-' + helpers.convertAndPadString(num32nds);
};

module.exports = currencyFormatter;
