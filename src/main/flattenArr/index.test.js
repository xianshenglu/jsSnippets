import flattenArr from '.'
describe('flattenArr', () => {
  let data1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] }
      ]
    }
  ]
  let result1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] }
      ]
    },
    { value: '1.1', children: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
    { value: '1.2.1', children: [] }
  ]
  test(`(${JSON.stringify(data1)}) should return ${JSON.stringify(
    result1
  )}`, () => {
    expect(flattenArr(data1)).toEqual(result1)
  })
  let data2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] }
      ]
    }
  ]
  let result2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] }
      ]
    },
    { value: '1.1', child: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', child: [{ value: '1.2.1', child: [] }] },
    { value: '1.2.1', child: [] }
  ]
  test(`(${JSON.stringify(data2)}) should return ${JSON.stringify(
    result2
  )}`, () => {
    expect(flattenArr(data2, 'child')).toEqual(result2)
  })
})
