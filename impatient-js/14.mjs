import * as assert from 'assert/strict'

let myVar
assert.equal(myVar, undefined)
assert.strictEqual(myVar, undefined)

function func (x) {
  return x
}

assert.equal(func(), undefined)

const obj = {}
assert.equal(obj.unknownProp, undefined)

function func1 () {}

assert.equal(func1(), undefined)

console.log(Object.getPrototypeOf(Object.prototype)) // null

console.log(/a/.exec('x')) // null

console.log(JSON.stringify({ a: undefined, b: null })) // {"b":null}

let x = null
if (x === null) {}
x = undefined
if (x === undefined) {}
if (x !== undefined && x !== null) {}
if (x) { // truthy?
         // x is neither: undefined, null, false, 0, NaN, ''
}
if (x === undefined || x === null) {}
if (!x) { // falsy?
  // x is: undefined, null, false, 0, NaN, ''
}