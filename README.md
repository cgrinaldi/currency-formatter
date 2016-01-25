# US Government Securities – 32nds Price Formatting

## Specification

US Government securities are quoted in dollars and fractions of a dollar. By market convention, the normal fraction used for Treasury security prices is 1/32. A hyphen separates the full dollar portion of the price from the 32nds of a dollar, which are to the right of the hyphen. Thus a bid quote of 105-08 means $105 plus 8/32 of a dollar, or $105.25, for each $100 face value of the note. At least two digits are used for the integer and only two for the 32nds part of the price, thus a price of $9 and plus 1/32 of a dollar is represented by 09-01.

## Requirements

- [ ] Write a class, ThirtySecondsFormatter, which can take a double and return a string formatted using the 32nds format described above.

- [ ] Write test cases, to drive the development of your code and provide a lasting regression test suite.

- [ ] Optimise for code readability.

- [ ] Remove duplicate code by refactoring appropriately.

- [ ] Pay no attention to performance aspects of the code.

## Note

Pay no attention to rounding issues, i.e. assume that only exact multiples of 1/32 will be passed to your code. Note that all bond prices that are exact multiples of 1/32 can be represented exactly as a double.

