'use strict'
/* # Exercice: Reverse String
 *
 * ## Explanation:
 * You must code a function that reverses a string.
 *
 * ## Example:
 *```
 *reverseString('my-string') === 'gnirts-ym'
 *```
 *
 * ## Expected Time
 * You should spend around 3 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/0-reverseString.validation.js
 */

function reverseString(str) {
  let ch = str.split("");
  ch.reverse();
  let m="";
  for (let i of ch){
    m+= i ;
  }
  return m ;
}

module.exports = reverseString
