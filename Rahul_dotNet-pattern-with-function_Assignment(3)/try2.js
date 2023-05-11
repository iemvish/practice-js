function printPatternUPSIDE(rows, typeOfPattern) {

    var i, j;
    //outer loop
    for (i = 1; i <= rows; i++) {
      for (j = 1; j <= rows - i; j++) {
        document.write('&nbsp;&nbsp');
      }
      for (k = 0; k < 2 * i - 1; k++) {
        if (typeOfPattern == patterntype.STAR) {
          document.write("*");
        }
        else if (typeOfPattern == patterntype.ALPHA) {
          document.write("A");
        }
        else if (typeOfPattern == patterntype.SMALL) {
          document.write("a");
        }
        else if (typeOfPattern == patterntype.NUMERIC) {
          document.write(k);
        }
        else {
          prompt("WRONG-INPUT");
        }
      }

      document.write('<br>');
    }
  }