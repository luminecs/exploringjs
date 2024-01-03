function func (value: any) {
  5 * value;
  value.propertyName
  value[123]
}

let storageLocation: any
storageLocation = null
storageLocation = true
storageLocation = {}

function func1 (value: any) {
  const a: null = value
  const b: boolean = value
  const c: object = value
}

function func2 (value: unknown) {
  // value.toFixed(2)
  (value as number).toFixed(2)
}

function func3 (value: unknown) {
  // value * 5
  if (value === 123) {
    value
    value * 5
  }
}

function func4 (value: unknown) {
  // value.length
  if (typeof value === 'string') {
    value
    value.length
  }
}

function func5 (value: unknown) {
  // value.test('abc')
  assertIsRegExp(value)
  value
  value.test('abc')
}

function assertIsRegExp (arg: unknown): asserts arg is RegExp {
  if (!(arg instanceof RegExp)) {
    throw new TypeError('Not RegExp: ' + arg)
  }

}