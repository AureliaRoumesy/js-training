'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const str =''
function jadenCase (str){
  let words = str.split(' ');
  let resultChar = ''
  let resultWords = ''
  for (let i=0; i< words.length; i++ ){
    let chars = words[i].split('');
    chars[0] = chars[0].toUpperCase();
    for (let i=0; i< chars.length; i++){
      resultChar += chars[i]
    }
    if (i < words.length -1){
      resultChar += ' '
    }
    else {
      resultChar += ''
    }
    resultWords = resultChar
  }
  return (resultWords);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('hello world'), 'Hello World')

// End of tests */
