function printPattern() {
  const patternType = document.getElementById("patterntype").value;
  const patternCase = document.getElementById("patterncase").value;

  var rows = document.getElementById("rows").value;

  const patterntype = {
    ALPHA: "capitalcase",
    SMALL: "smallcase",
    NUMERIC: "numbers",
    STAR: "star",
  };
  const patterncase = {
    UPSIDE: "upwardPyramid",
    DOWNSIDE: "downwardPyramid",
    FULL: "bothPyramid",
    LEFTTRIANGLE: "leftTriangle",
    RIGHTTRIANGLE: "rightTriangle",
  };

  function getvalue() {
    switch (patternType) {
      case typeOfPattern== patterntype.ALPHA:
        document.write("A");
        break;
      case patterntype.SMALL:
        document.write("a");
        break;
      case patterntype.NUMERIC:
        document.write(1);
        break;
      case patterntype.STAR:
        document.write("*");
        break;
      default:
        prompt("Wrong Input")
        break;
    }
  }

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
      }

      document.write('<br>');
    }
  }


  if(printPatternUPSIDE.UPSIDE){
    printPatternUPSIDE();
  }


