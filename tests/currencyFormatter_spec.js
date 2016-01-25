var expect = require('chai').expect;
var currencyFormatter = require('../currencyFormatter.js');

describe('currencyFormatter', () => {


  it('should throw an error when value less than 0 provided', () => {
    expect(currencyFormatter.bind(-0.5)).to.throw(Error);
  });

  it('should throw an error when value is not a number', () => {
    expect(currencyFormatter.bind('cat')).to.throw(Error);
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
