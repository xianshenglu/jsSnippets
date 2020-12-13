import calcSizeWithRespectRatio from '.'

describe('calcSizeWithRespectRatio', () => {
  test('({width:100,height:100},{width:50,height:200}) should return { width: 25, height: 100, offsetX: 75, offsetY: 0 }', () => {
    const result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 }
    )
    const expectedResult = { width: 25, height: 100, offsetX: 75, offsetY: 0 }
    expect(result).toEqual(expectedResult)
  })
  test('({width:100,height:100},{width:200,height:50}) should return { width: 100, height: 25, offsetX: 0, offsetY: 75 }', () => {
    const result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 }
    )
    const expectedResult = { width: 100, height: 25, offsetX: 0, offsetY: 75 }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:50,height:200}),'cover') should return {width:100,height:400,offsetX:0,offsetY:-300}", () => {
    const result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 },
      'cover'
    )
    const expectedResult = {
      width: 100,
      height: 400,
      offsetX: 0,
      offsetY: -300,
    }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:200,height:50}),'cover') should return {width:400,height:100,offsetX:-300,offsetY:0}", () => {
    const result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 },
      'cover'
    )
    const expectedResult = {
      width: 400,
      height: 100,
      offsetX: -300,
      offsetY: 0,
    }
    expect(result).toEqual(expectedResult)
  })
})
