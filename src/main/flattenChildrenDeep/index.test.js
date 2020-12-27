import flattenChildrenDeep from '.'

describe('flattenChildrenDeep', () => {
  const data1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
      ],
    },
  ]
  const result1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
      ],
    },
    { value: '1.1', children: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
    { value: '1.2.1', children: [] },
  ]
  test(`(${JSON.stringify(data1)}) should return ${JSON.stringify(
    result1
  )}`, () => {
    expect(flattenChildrenDeep(data1)).toEqual(result1)
  })
  const data2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] },
      ],
    },
  ]
  const result2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] },
      ],
    },
    { value: '1.1', child: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', child: [{ value: '1.2.1', child: [] }] },
    { value: '1.2.1', child: [] },
  ]
  test(`(${JSON.stringify(data2)}) should return ${JSON.stringify(
    result2
  )}`, () => {
    expect(flattenChildrenDeep(data2, 'child')).toEqual(result2)
  })
})
