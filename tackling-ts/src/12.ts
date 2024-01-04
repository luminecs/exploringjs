import * as assert from 'assert'

enum NoYes {
  No = 0,
  Yes = 1,
}

assert.equal(NoYes.No, 0)
assert.equal(NoYes.Yes, 1)

enum NoYes2 {
  No,
  Yes,
}

assert.equal(NoYes2.No, 0)
assert.equal(NoYes2.Yes, 1)

function toGerman (value: NoYes) {
  switch (value) {
    case NoYes.No:
      return 'Nein'
    case NoYes.Yes:
      return 'Ja'
  }
}

assert.equal(toGerman(NoYes.No), 'Nein')
assert.equal(toGerman(NoYes.Yes), 'Ja')

enum NoYes3 {
  No = 'No',
  Yes = 'Yes',
}

assert.equal(NoYes3.No, 'No')
assert.equal(NoYes3.Yes, 'Yes')

enum Enum {
  One = 'One',
  Two = 'Two',
  Three = 3,
  Four,
}

assert.deepEqual(
  [Enum.One, Enum.Two, Enum.Three, Enum.Four],
  ['One', 'Two', 3, 4],
)

enum Enum2 {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F,
}

assert.deepEqual(
  [Enum2.A, Enum2.B, Enum2.C, Enum2.D, Enum2.E, Enum2.F],
  [0, 1, 'C', 'D', 8, 9],
)

enum HttpRequestField {
  'Accept',
  'Accept-Charset',
  'Accept-Datetime',
  'Accept-Encoding',
  'Accept-Language',
}

assert.equal(HttpRequestField['Accept-Charset'], 1)
