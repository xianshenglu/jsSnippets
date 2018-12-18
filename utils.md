<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * [.sortCharacters(str)](#module_utils.sortCharacters) ⇒ <code>Array</code>
    * [.getPseudorandom(arr)](#module_utils.getPseudorandom) ⇒ <code>Array</code>
    * [.toFixedNoLast0(num, precise)](#module_utils.toFixedNoLast0) ⇒ <code>String</code>
    * [.camelToHyphen(str)](#module_utils.camelToHyphen) ⇒ <code>String</code>
    * [.hyphenToCamel(str)](#module_utils.hyphenToCamel) ⇒ <code>String</code>
    * [.isObject(obj)](#module_utils.isObject) ⇒ <code>Boolean</code>
    * [.isPlainObject(obj)](#module_utils.isPlainObject)

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
isObject(new Function()) //trueisObject(new RegExp()) //trueisObject('') //false
```
<a name="module_utils.isPlainObject"></a>

### utils.isPlainObject(obj)
detect if it is a narrow object

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

