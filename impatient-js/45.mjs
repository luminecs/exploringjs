import * as assert from 'assert'

assert.equal(
  JSON.stringify({ foo: ['a', 'b'] }),
  '{"foo":["a","b"]}'
)

assert.equal(
  JSON.stringify({ foo: ['a', 'b'] }, null, 2),
  `{
  "foo": [
    "a",
    "b"
  ]
}`
)

assert.equal(JSON.stringify('abc'), '"abc"')
assert.equal(JSON.stringify(123), '123')
assert.equal(JSON.stringify(null), 'null')
assert.equal(JSON.stringify(undefined), undefined)
assert.equal(JSON.stringify(true), 'true')
assert.equal(JSON.stringify(NaN), 'null')
assert.equal(JSON.stringify(Infinity), 'null')
assert.equal(JSON.stringify(-Infinity), 'null')
assert.equal(JSON.stringify(Symbol()), undefined)

// TypeError: Do not know how to serialize a BigInt
// JSON.stringify(123n)

assert.equal(
  JSON.stringify({ toJSON () { return true } }),
  'true'
)

assert.equal(
  JSON.stringify(new Date(2999, 11, 31)),
  '"2999-12-30T16:00:00.000Z"'
)

assert.equal(
  JSON.stringify(new Boolean(true)),
  'true'
)

assert.equal(
  JSON.stringify(new Number(123)),
  '123'
)

assert.equal(
  JSON.stringify([undefined, 123, Symbol()]),
  '[null,123,null]'
)

assert.equal(
  JSON.stringify({ a: undefined, b: 123, c: Symbol() }),
  '{"b":123}'
)

assert.equal(JSON.stringify(() => {}), undefined)

// assert.equal(
//   JSON.parse('{"foo":["a","b"]}'),
//   { foo: ['a', 'b'] }
// )