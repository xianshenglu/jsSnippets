import flatFormRules from '.'

describe('flatFormRules', () => {
  test('no rule', () => {
    expect(flatFormRules({})).toEqual([])
  })
  test('single rule', () => {
    expect(
      flatFormRules({
        field1: [{ message: 'field1 rule1!' }],
        field2: [{ message: 'field2 rule1!' }],
      })
    ).toEqual([{ message: 'field1 rule1!' }, { message: 'field2 rule1!' }])
  })
  test('multiple rules', () => {
    expect(
      flatFormRules({
        field1: [{ message: 'field1 rule1!' }],
        field2: [{ message: 'field2 rule1!' }, { message: 'field2 rule2!' }],
      })
    ).toEqual([
      { message: 'field1 rule1!' },
      { message: 'field2 rule1!' },
      { message: 'field2 rule2!' },
    ])
  })
})
