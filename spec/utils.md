<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * [.sortCharacters(str)](#module_utils.sortCharacters) ⇒ <code>Array</code>
    * [.getPseudorandom(arr)](#module_utils.getPseudorandom) ⇒ <code>Array</code>
    * [.toFixedNoLast0(num, precise)](#module_utils.toFixedNoLast0) ⇒ <code>String</code>
    * [.camelToHyphen(str)](#module_utils.camelToHyphen) ⇒ <code>String</code>
    * [.hyphenToCamel(str)](#module_utils.hyphenToCamel) ⇒ <code>String</code>
    * [.isObject(obj)](#module_utils.isObject) ⇒ <code>Boolean</code>
    * [.isPlainObject(obj)](#module_utils.isPlainObject) ⇒ <code>Boolean</code>
    * [.replaceProperty(state, param)](#module_utils.replaceProperty)
    * [.flattenArr(array, [children])](#module_utils.flattenArr) ⇒ <code>Array</code>
    * [.tryJsonParse(jsonText, [errorPropertyName], [valueForNull])](#module_utils.tryJsonParse) ⇒ <code>Object</code>
    * [.calcSizeWithRespectRatio(parentRect, childRect, [mode])](#module_utils.calcSizeWithRespectRatio) ⇒ <code>Object</code>

<a name="module_utils.sortCharacters"></a>

### utils.sortCharacters(str) ⇒ <code>Array</code>
put the repetitive letter together

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string needs to sort |

**Example**  
```js
sortCharacters('sfdaffaadaafafsfed') // ["e", "ss", "ddd", "aaaaaa", "ffffff"]
```
<a name="module_utils.getPseudorandom"></a>

### utils.getPseudorandom(arr) ⇒ <code>Array</code>
sort array randomly

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array</code> - array randomly sorted  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
getPseudorandom([1,2,3,4,5,6]) //not equal [1,2,3,4,5,6]
```
<a name="module_utils.toFixedNoLast0"></a>

### utils.toFixedNoLast0(num, precise) ⇒ <code>String</code>
delete the last `0` when a number calls toFixed

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| num | <code>Number</code> | 
| precise | <code>Number</code> | 

**Example**  
```js
toFixedNoLast0(12.230, 4) //"12.23"
```
<a name="module_utils.camelToHyphen"></a>

### utils.camelToHyphen(str) ⇒ <code>String</code>
camel to hyphen

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
camelToHyphen('camelToHyphen') // "camel-to-hyphen"
```
<a name="module_utils.hyphenToCamel"></a>

### utils.hyphenToCamel(str) ⇒ <code>String</code>
hyphen to camel

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
hyphenToCamel('hyphen-to-camel') // "hyphenToCamel"
```
<a name="module_utils.isObject"></a>

### utils.isObject(obj) ⇒ <code>Boolean</code>
detect if it is a generalized object

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

**Example**  
```js
isObject(new RegExp()) //trueisObject('') //false
```
<a name="module_utils.isPlainObject"></a>

### utils.isPlainObject(obj) ⇒ <code>Boolean</code>
detect if it is a narrow object

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

**Example**  
```js
isPlainObject(new Function()) //falseisPlainObject({}) //true
```
<a name="module_utils.replaceProperty"></a>

### utils.replaceProperty(state, param)
execute state[property[.property.[...]]] = data

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| param | <code>Object</code> | 

**Example**  
```js
replaceProperty({a:{b:{c:1}}},{path:'a.b.c',data:2})// {a:{b:{c:2}}}replaceProperty({a:{b:{c:[1,2,3]}}},{path:'a.b.c.1',data:1}) // {a:{b:{c:[1,1,3]}}}
```
<a name="module_utils.flattenArr"></a>

### utils.flattenArr(array, [children]) ⇒ <code>Array</code>
put nested children in one dimension

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  |  |
| [children] | <code>string</code> | <code>&quot;&#x27;children&#x27;&quot;</code> | key name of children |

**Example**  
```js
flattenArr([{value:'1',children:[{value:'1.1',children:[{value:'1.1.1'}]},{value:'1.2',children:[{value:'1.2.1',children:[]}]}]}]) //[{value:'1',...},{value:'1.1',...},{value:'1.1.1',...},{value:'1.2',...},{value:'1.2.1',...}]
```
<a name="module_utils.tryJsonParse"></a>

### utils.tryJsonParse(jsonText, [errorPropertyName], [valueForNull]) ⇒ <code>Object</code>
add error handler when using JSON.parse()

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Object</code> - new Object, with the original text saved in errorPropertyName  

| Param | Type | Default |
| --- | --- | --- |
| jsonText | <code>\*</code> |  | 
| [errorPropertyName] | <code>string</code> | <code>&quot;&#x27;error&#x27;&quot;</code> | 
| [valueForNull] | <code>\*</code> | <code>{ [errorPropertyName]: null }</code> | 

**Example**  
```js
tryJsonParse('str') //{error:'str'}tryJsonParse(null,null) //{'null':null}tryJsonParse(null,null,null) //nulltryJsonParse('{"name":"test","value":1}') //{name: "test", value: 1}
```
<a name="module_utils.calcSizeWithRespectRatio"></a>

### utils.calcSizeWithRespectRatio(parentRect, childRect, [mode]) ⇒ <code>Object</code>
calculate the max size child can be without change respect ratio

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Object</code> - target child size  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parentRect | <code>Object</code> |  | parent container size |
| childRect | <code>Object</code> |  | child container size |
| [mode] | <code>string</code> | <code>&quot;&#x27;contain&#x27;&quot;</code> | calculate by contain or cover, which is similar to background-size values |

**Example**  
```js
calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200}) //{width:25,height:100,offsetX:75,offsetY:0}calcSizeWithRespectRatio({width:100,height:100},{width:50,height:200},'cover') //{width:100,height:400,offsetX:0,offsetY:-300}
```
