import calcSizeWithRespectRatio from '.'
describe('calcSizeWithRespectRatio', () => {
  test('({width:100,height:100},{width:50,height:200}) should return { width: 25, height: 100, offsetX: 75, offsetY: 0 }', () => {
    let result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 }
    )
    let expectedResult = { width: 25, height: 100, offsetX: 75, offsetY: 0 }
    expect(result).toEqual(expectedResult)
  })
  test('({width:100,height:100},{width:200,height:50}) should return { width: 100, height: 25, offsetX: 0, offsetY: 75 }', () => {
    let result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 }
    )
    let expectedResult = { width: 100, height: 25, offsetX: 0, offsetY: 75 }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:50,height:200}),'cover') should return {width:100,height:400,offsetX:0,offsetY:-300}", () => {
    let result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 },
      'cover'
    )
    let expectedResult = {
      width: 100,
      height: 400,
      offsetX: 0,
      offsetY: -300
    }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:200,height:50}),'cover') should return {width:400,height:100,offsetX:-300,offsetY:0}", () => {
    let result = calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 },
      'cover'
    )
    let expectedResult = {
      width: 400,
      height: 100,
      offsetX: -300,
      offsetY: 0
    }
    expect(result).toEqual(expectedResult)
  })
})
