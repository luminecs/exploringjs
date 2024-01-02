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