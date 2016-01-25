module.exports = {
  convertTo32nds: function(num) {
    for (var i = 0; i < 32; i++) {
      if (num === i / 32) {
        return i;
      }
    }
  },

  padStrings: function(num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

};
