## Functions

<dl>
<dt><a href="#sortCharacters">sortCharacters(str)</a> ⇒ <code>Array</code></dt>
<dd><p>put the repetitive letter together</p>
</dd>
<dt><a href="#getPseudorandom">getPseudorandom(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>sort array randomly</p>
</dd>
<dt><a href="#toFixedNoLast0">toFixedNoLast0(num, precise)</a> ⇒ <code>String</code></dt>
<dd><p>delete the last <code>0</code> when a number calls toFixed</p>
</dd>
<dt><a href="#camelToHyphen">camelToHyphen(str)</a> ⇒ <code>String</code></dt>
<dd><p>camel to hyphen</p>
</dd>
<dt><a href="#hyphenToCamel">hyphenToCamel(str)</a> ⇒ <code>String</code></dt>
<dd><p>hyphen to camel</p>
</dd>
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if it is a generalized object</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if it is a narrow object</p>
</dd>
<dt><a href="#replaceProperty">replaceProperty(state, param)</a></dt>
<dd><p>execute state[property[.property.[...]]] = data</p>
</dd>
<dt><a href="#flattenArr">flattenArr(array, [children])</a> ⇒ <code>Array</code></dt>
<dd><p>put nested children in one dimension</p>
</dd>
<dt><a href="#tryJsonParse">tryJsonParse(jsonText, [errorPropertyName], [valueForNull])</a> ⇒ <code>Object</code></dt>
<dd><p>add error handler when using JSON.parse()</p>
</dd>
<dt><a href="#calcSizeWithRespectRatio">calcSizeWithRespectRatio(parentRect, childRect, [mode])</a> ⇒ <code>Object</code></dt>
<dd><p>calculate the max size child can be without change respect ratio</p>
</dd>
<dt><a href="#serializeObj">serializeObj(obj, [transformer])</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#getDateInfo">getDateInfo()</a></dt>
<dd><p>get common date info of a date</p>
</dd>
<dt><a href="#flatFormRules">flatFormRules(rules)</a></dt>
<dd></dd>
</dl>

<a name="sortCharacters"></a>

## sortCharacters(str) ⇒ <code>Array</code>

put the repetitive letter together

**Kind**: global function

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| str   | <code>String</code> | string needs to sort |

**Example**

```js
sortCharacters('sfdaffaadaafafsfed') // ["e", "ss", "ddd", "aaaaaa", "ffffff"]
```

<a name="getPseudorandom"></a>

## getPseudorandom(arr) ⇒ <code>Array</code>

sort array randomly

**Kind**: global function  
**Returns**: <code>Array</code> - array randomly sorted

| Param | Type               |
| ----- | ------------------ |
| arr   | <code>Array</code> |

**Example**

```js
getPseudorandom([1, 2, 3, 4, 5, 6]) //not equal [1,2,3,4,5,6]
```

<a name="toFixedNoLast0"></a>

## toFixedNoLast0(num, precise) ⇒ <code>String</code>

delete the last `0` when a number calls toFixed

**Kind**: global function

| Param   | Type                |
| ------- | ------------------- |
| num     | <code>Number</code> |
| precise | <code>Number</code> |

**Example**

```js
toFixedNoLast0(12.23, 4) //"12.23"
```

<a name="camelToHyphen"></a>

## camelToHyphen(str) ⇒ <code>String</code>

camel to hyphen

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| str   | <code>String</code> |

**Example**

```js
camelToHyphen('camelToHyphen') // "camel-to-hyphen"
```

<a name="hyphenToCamel"></a>

## hyphenToCamel(str) ⇒ <code>String</code>

hyphen to camel

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| str   | <code>String</code> |

**Example**

```js
hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
```

<a name="isObject"></a>

## isObject(obj) ⇒ <code>Boolean</code>

detect if it is a generalized object

**Kind**: global function

| Param | Type            |
| ----- | --------------- |
| obj   | <code>\*</code> |

**Example**

```js
isObject(new RegExp()) //true
isObject('') //false
```

<a name="isPlainObject"></a>

## isPlainObject(obj) ⇒ <code>Boolean</code>

detect if it is a narrow object

**Kind**: global function

| Param | Type            |
| ----- | --------------- |
| obj   | <code>\*</code> |

**Example**

```js
isPlainObject(new Function()) //false
isPlainObject({}) //true
```

<a name="replaceProperty"></a>

## replaceProperty(state, param)

execute state[property[.property.[...]]] = data

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| state | <code>Object</code> |
| param | <code>Object</code> |

**Example**

```js
replaceProperty({ a: { b: { c: 1 } } }, { path: 'a.b.c', data: 2 }) // {a:{b:{c:2}}}
replaceProperty({ a: { b: { c: [1, 2, 3] } } }, { path: 'a.b.c.1', data: 1 }) // {a:{b:{c:[1,1,3]}}}
```

<a name="flattenArr"></a>

## flattenArr(array, [children]) ⇒ <code>Array</code>

put nested children in one dimension

**Kind**: global function

| Param      | Type                | Default                                       | Description          |
| ---------- | ------------------- | --------------------------------------------- | -------------------- |
| array      | <code>Array</code>  |                                               |                      |
| [children] | <code>string</code> | <code>&quot;&#x27;children&#x27;&quot;</code> | key name of children |

**Example**

```js
flattenArr([
  {
    value: '1',
    children: [
      { value: '1.1', children: [{ value: '1.1.1' }] },
      { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
    ],
  },
]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
```

<a name="tryJsonParse"></a>

## tryJsonParse(jsonText, [errorPropertyName], [valueForNull]) ⇒ <code>Object</code>

add error handler when using JSON.parse()

**Kind**: global function  
**Returns**: <code>Object</code> - new Object, with the original text saved in errorPropertyName

| Param               | Type                | Default                                    |
| ------------------- | ------------------- | ------------------------------------------ |
| jsonText            | <code>\*</code>     |                                            |
| [errorPropertyName] | <code>string</code> | <code>&quot;&#x27;error&#x27;&quot;</code> |
| [valueForNull]      | <code>\*</code>     | <code>{ [errorPropertyName]: null }</code> |

**Example**

```js
tryJsonParse('str') //{error:'str'}
tryJsonParse(null, null) //{'null':null}
tryJsonParse(null, null, null) //null
tryJsonParse('{"name":"test","value":1}') //{name: "test", value: 1}
```

<a name="calcSizeWithRespectRatio"></a>

## calcSizeWithRespectRatio(parentRect, childRect, [mode]) ⇒ <code>Object</code>

calculate the max size child can be without change respect ratio

**Kind**: global function  
**Returns**: <code>Object</code> - target child size

| Param      | Type                | Default                                      | Description                                                               |
| ---------- | ------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| parentRect | <code>Object</code> |                                              | parent container size                                                     |
| childRect  | <code>Object</code> |                                              | child container size                                                      |
| [mode]     | <code>string</code> | <code>&quot;&#x27;contain&#x27;&quot;</code> | calculate by contain or cover, which is similar to background-size values |

**Example**

```js
calcSizeWithRespectRatio(
  { width: 100, height: 100 },
  { width: 50, height: 200 }
) //{width:25,height:100,offsetX:75,offsetY:0}
calcSizeWithRespectRatio(
  { width: 100, height: 100 },
  { width: 50, height: 200 },
  'cover'
) //{width:100,height:400,offsetX:0,offsetY:-300}
```

<a name="serializeObj"></a>

## serializeObj(obj, [transformer]) ⇒ <code>String</code>

**Kind**: global function  
**Returns**: <code>String</code> - serialized string  
**Author**: luxiansheng

| Param         | Type                  |
| ------------- | --------------------- |
| obj           | <code>Object</code>   |
| [transformer] | <code>function</code> |

**Example**

```js
// returns x=1&y=2
serializeObj({ x: 1, y: 2 })
```

**Example**

```js
// returns x=1
serializeObj({ x: 1, y: undefined })
```

**Example**

```js
// returns x=1
serializeObj({ x: 1, y: null })
```

**Example**

```js
// returns x=1
serializeObj({ x: 1, y: '' })
```

**Example**

```js
// returns x=1&y=15030230023
serializeObj({ x: 1, y: new Date() }, (key, value) =>
  value instanceof Date ? key + '=' + value.getTime() : key + '=' + value
)
```

<a name="getDateInfo"></a>

## getDateInfo()

get common date info of a date

**Kind**: global function  
**Author**: luxiansheng  
<a name="flatFormRules"></a>

## flatFormRules(rules)

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| rules | <code>Object</code> |

**Example**

```js
// [{"message":"field1 rule1!"},{"message":"field2 rule1!"},{"message":"field2 rule2!"}]
flatFormRules({
  field1: [{ message: 'field1 rule1!' }],
  field2: [{ message: 'field2 rule1!' }, { message: 'field2 rule2!' }],
})
```

**Example**

```js
// [{"message":"field1 rule1!"},{"message":"field2 rule1!"}]
flatFormRules({
  field1: [{ message: 'field1 rule1!' }],
  field2: [{ message: 'field2 rule1!' }],
})
```
