module.exports = {
  convertTo32nds: function(num) {
    for (var i = 0; i < 32; i++) {
      if (num === i / 32) {
        return i;
      }
    }
  },

  // TODO: Refactor into two different functions
  // TODO: Allow user to pad a variable number of 0s
  convertAndPadString: function(num) {
    if (num < 10) {
      return '0' + num;
    }
    return '' + num;
  }

};
