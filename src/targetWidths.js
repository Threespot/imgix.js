function targetWidths() {
  var resolutions = [];
  var MIN_WIDTH = 160;
  var MAX_WIDTH = 4000;
  var BREAKPOINTS = 30;

  for (var i=0, len=BREAKPOINTS; i<len; i++) {
    var imgWidth = Math.round(MIN_WIDTH + (i * (MAX_WIDTH / BREAKPOINTS)));
    resolutions.push(imgWidth);
  }
}

module.exports = targetWidths();
