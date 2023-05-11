function printPatternUPSIDE(rows, typeOfPattern) {

    var i, j;
    //outer loop
    for (i = 1; i <= rows; i++) {
      for (j = 1; j <= rows - i; j++) {
        document.write("'<br/>'");
      }
      for (k = 0; k < 2 * i - 1; k++) {


        if (typeOfPattern == 'A') {
          document.write("*");
        }
        else if (typeOfPattern == 'B') {
          document.write("A");
        }
        else if (typeOfPattern == 'C') {
          document.write("a");
        }
        else if (typeOfPattern == 'D') {
          document.write(k);
        }
        else {
          prompt("WRONG-INPUT");
        }
        }
      }

      document.write('<br>');
    }

    
    printPatternUPSIDE(5,1)