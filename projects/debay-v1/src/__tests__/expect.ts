import jestGlobals from '@jest/globals'

function expect<R>(r: R): jest.Matchers<R> {
  return jestGlobals.expect(r) as unknown as jest.Matchers<R>;
}

export default expect;
