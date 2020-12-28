## Modules

<dl>
<dt><a href="#module_$">$</a> ⇒ <code>Array</code></dt>
<dd><p>imitate DOM selector<code>$</code> in jQuery</p>
</dd>
<dt><a href="#module_calcSizeWithRespectRatio">calcSizeWithRespectRatio</a> ⇒ <code>Object</code></dt>
<dd><p>calculate the max size child can be without change respect ratio</p>
</dd>
<dt><a href="#module_camelToHyphen">camelToHyphen</a> ⇒ <code>String</code></dt>
<dd><p>camel to hyphen</p>
</dd>
<dt><a href="#module_flatFormRules">flatFormRules</a></dt>
<dd></dd>
<dt><a href="#module_flattenChildrenDeep">flattenChildrenDeep</a> ⇒ <code>Array</code></dt>
<dd><p>put nested children in one dimension</p>
</dd>
<dt><a href="#module_getElOffsetToEvent">getElOffsetToEvent</a> ⇒ <code>Object</code></dt>
<dd><p>get element relative position offset to event</p>
</dd>
<dt><a href="#module_hyphenToCamel">hyphenToCamel</a> ⇒ <code>String</code></dt>
<dd><p>hyphen to camel</p>
</dd>
<dt><a href="#module_isElement">isElement</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if obj is an element or document</p>
</dd>
<dt><a href="#module_isEscape">isEscape</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if user presses Escape key, just demonstrate how to handle keyCode compatibility</p>
</dd>
<dt><a href="#module_isJson">isJson</a> ⇒ <code>boolean</code></dt>
<dd><p>detect whether the string can be called with JSON.parse</p>
</dd>
<dt><a href="#module_isLandscape">isLandscape</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect whether the screen orientation is landscape</p>
</dd>
<dt><a href="#module_serializeObj">serializeObj</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#module_toFixedNoLast0">toFixedNoLast0</a> ⇒ <code>String</code></dt>
<dd><p>delete the last <code>0</code> when a number calls toFixed</p>
</dd>
</dl>

<a name="module_$"></a>

## $ ⇒ <code>Array</code>

imitate DOM selector`$` in jQuery

**Returns**: <code>Array</code> - array with target nodes

| Param        | Type                | Default               |
| ------------ | ------------------- | --------------------- |
| selector     | <code>String</code> |                       |
| [parentNode] | <code>Node</code>   | <code>document</code> |

<a name="module_calcSizeWithRespectRatio"></a>

## calcSizeWithRespectRatio ⇒ <code>Object</code>

calculate the max size child can be without change respect ratio

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

<a name="module_camelToHyphen"></a>

## camelToHyphen ⇒ <code>String</code>

camel to hyphen

| Param | Type                |
| ----- | ------------------- |
| str   | <code>String</code> |

**Example**

```js
camelToHyphen('camelToHyphen') // "camel-to-hyphen"
```

<a name="module_flatFormRules"></a>

## flatFormRules

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

<a name="module_flattenChildrenDeep"></a>

## flattenChildrenDeep ⇒ <code>Array</code>

put nested children in one dimension

| Param      | Type                | Default                                       | Description          |
| ---------- | ------------------- | --------------------------------------------- | -------------------- |
| array      | <code>Array</code>  |                                               |                      |
| [children] | <code>string</code> | <code>&quot;&#x27;children&#x27;&quot;</code> | key name of children |

**Example**

```js
flattenChildrenDeep([
  {
    value: '1',
    children: [
      { value: '1.1', children: [{ value: '1.1.1' }] },
      { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
    ],
  },
]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
```

<a name="module_getElOffsetToEvent"></a>

## getElOffsetToEvent ⇒ <code>Object</code>

get element relative position offset to event

**Returns**: <code>Object</code> - {left:Number,right:Number,top:Number,bottom:Number}

| Param | Type                     |
| ----- | ------------------------ |
| event | <code>Event</code>       |
| el    | <code>HTMLElement</code> |

<a name="module_hyphenToCamel"></a>

## hyphenToCamel ⇒ <code>String</code>

hyphen to camel

| Param | Type                |
| ----- | ------------------- |
| str   | <code>String</code> |

**Example**

```js
hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
```

<a name="module_isElement"></a>

## isElement ⇒ <code>Boolean</code>

detect if obj is an element or document

| Param | Type            |
| ----- | --------------- |
| obj   | <code>\*</code> |

**Example**

```js
isElement(document) // true
isElement(document.documentElement) // true
isElement(document.createElement('svg')) // true
isElement(document.createDocumentFragment()) // false
isElement([]) // false
```

<a name="module_isEscape"></a>

## isEscape ⇒ <code>Boolean</code>

detect if user presses Escape key, just demonstrate how to handle keyCode compatibility

| Param | Type               |
| ----- | ------------------ |
| event | <code>Event</code> |

<a name="module_isJson"></a>

## isJson ⇒ <code>boolean</code>

detect whether the string can be called with JSON.parse

| Param    | Type                |
| -------- | ------------------- |
| jsonText | <code>string</code> |

**Example**

```js
isJson('str') //false

isJson('{"name":"test","value":1}') //true
```

<a name="module_isLandscape"></a>

## isLandscape ⇒ <code>Boolean</code>

detect whether the screen orientation is landscape

<a name="module_serializeObj"></a>

## serializeObj ⇒ <code>String</code>

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

<a name="module_toFixedNoLast0"></a>

## toFixedNoLast0 ⇒ <code>String</code>

delete the last `0` when a number calls toFixed

| Param   | Type                |
| ------- | ------------------- |
| num     | <code>Number</code> |
| precise | <code>Number</code> |

**Example**

```js
toFixedNoLast0(12.23, 4) //"12.23"
```
