'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :

let numA = ''
let numB = ''

function multiply (numA, numB){
    let absA = Math.abs(numA);
    let absB = Math.abs(numB);
    let multi = 0
    const multiRec = count => {
      if (count < absB) {
        multiRec(count + 1) 
        multi = multi + absA
      }
    }
    multiRec(0)
    if (numA == 0 || numB == 0 || (numA == 0 && numB == 0)){
        return (0);
    }
    else if (numA < 0 && numB < 0) {
        return (multi);
    }
    else if (numA < 0 || numB < 0) {
        return (-multi);
    }
    else {
        return (multi)
    }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
