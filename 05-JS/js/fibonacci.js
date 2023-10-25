/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var p = document.getElementById("fibonacciLbl");
  var br = document.createElement("br");
  memo = "The fibonnaci for " + n +" is: " + f(n);
  p.append(memo);
  p.append(br)
  return n;
}

function f(n) {
  var value;
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    console.log("true")
  } else {
    var x = 1;
    var y = 1;
    var z = x + y;
    var i = 2;
    while (i < n) {
      z = x + y;
      x = y;
      y = z;
  
      i = i + 1;
    }
    
  }
  value = y;
  console.log(value)
  return value;
}
