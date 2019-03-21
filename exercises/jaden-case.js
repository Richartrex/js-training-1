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
  
function jadenCase(a){
    return a.charAt(0).toUpperCase() + a.slice(1);
    }  

//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("orange"), ("Orange"))
// End of tests */
