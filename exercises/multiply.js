'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

let a = ''
let b = ''

function multiply (a, b){
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let multi = 0
    for (let i=0 ; i < absB; i++){
        multi = multi + absA;
    }
    if (a == 0 || b == 0 || (a == 0 && b == 0)){
        return (0);
    }
    else if (a < 0 && b < 0) {
        return (multi);
    }
    else if (a < 0 || b < 0) {
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
