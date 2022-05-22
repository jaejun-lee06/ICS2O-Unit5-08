// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html


/**
 * Check servie worker.
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08/sw.js", {
    scope: "/ICS2O-Unit5-08/",
  });
}

'use strict'

/**
 * This function calculates long division
 */
function myButtonClicked() {
  // input
  var integer1 = document.getElementById("integer1").value
  var integer2 = document.getElementById("integer2").value

  // process
  var total = 0
  var firstIntegerAsInt = parseInt(integer1)
  var secondIntegerAsInt = parseInt(integer2)
  var remainder = firstIntegerAsInt

  if ((firstIntegerAsInt > 0) && (secondIntegerAsInt > 0)) {
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }

  } else if ((firstIntegerAsInt < 0) && (secondIntegerAsInt < 0)) {
    remainder = Math.abs(remainder)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }

  } else {
    remainder = Math.abs(remainder)
    secondIntegerAsInt = Math.abs(secondIntegerAsInt)
    while (remainder >= secondIntegerAsInt) {
      remainder = remainder - secondIntegerAsInt
      total++
    }
    total = -Math.abs(total)
  }

  // output
  document.getElementById("answers").innerHTML = integer1 + " ÷ " + integer2 + " = " + total + " R " + remainder
}