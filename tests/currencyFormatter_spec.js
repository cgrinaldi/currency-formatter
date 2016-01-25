var expect = require('chai').expect;
var currencyFormatter = require('../currencyFormatter.js');

describe('currencyFormatter', () => {

  it('should return true', () => {
    expect(true).to.equal(true);
  });

  it('should correctly format test cases', () => {
    var formatter = new currencyFormatter(105.25);
    expect(formatter.formatCurrency()).to.equal('105-08');
  });

  it('should correctly pad the currency format in cases where intger amount is less than 10', () => {
    var formatter = new currencyFormatter(9.5);
    expect(formatter.formatCurrency()).to.equal('09-16');
  });

});
