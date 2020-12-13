## Functions

<dl>
<dt><a href="#$">$(selector, [parentNode])</a> ⇒ <code>Array</code></dt>
<dd><p>imitate DOM selector<code>$</code> in jQuery</p>
</dd>
<dt><a href="#closest">closest(el, selector, destination)</a></dt>
<dd><p>implement <code>closest</code> with destination</p>
</dd>
<dt><a href="#getElOffsetToEvent">getElOffsetToEvent(event, el)</a> ⇒ <code>Object</code></dt>
<dd><p>get element relative position offset to event</p>
</dd>
<dt><a href="#isElement">isElement(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if obj is an element or document</p>
</dd>
<dt><a href="#isEscape">isEscape(event)</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect if user presses Escape key, just demonstrate how to handle keyCode compatibility</p>
</dd>
<dt><a href="#htmlEncodeByDom">htmlEncodeByDom(text)</a> ⇒ <code>String</code></dt>
<dd><p>encode user input to avoid evil script</p>
</dd>
<dt><a href="#htmlDecodeByDom">htmlDecodeByDom(text)</a> ⇒ <code>String</code></dt>
<dd><p>decode user input to show original text</p>
</dd>
<dt><a href="#isLandscape">isLandscape()</a> ⇒ <code>Boolean</code></dt>
<dd><p>detect whether the screen orientation is landscape</p>
</dd>
</dl>

<a name="$"></a>

## $(selector, [parentNode]) ⇒ <code>Array</code>

imitate DOM selector`$` in jQuery

**Kind**: global function  
**Returns**: <code>Array</code> - array with target nodes

| Param        | Type                | Default               |
| ------------ | ------------------- | --------------------- |
| selector     | <code>String</code> |                       |
| [parentNode] | <code>Node</code>   | <code>document</code> |

<a name="closest"></a>

## closest(el, selector, destination)

implement `closest` with destination

**Kind**: global function

| Param       | Type                     | Description                                |
| ----------- | ------------------------ | ------------------------------------------ |
| el          | <code>HTMLElement</code> | element to start find                      |
| selector    | <code>String</code>      |                                            |
| destination | <code>HTMLElement</code> | where to stop query when meeting this node |

<a name="getElOffsetToEvent"></a>

## getElOffsetToEvent(event, el) ⇒ <code>Object</code>

get element relative position offset to event

**Kind**: global function  
**Returns**: <code>Object</code> - {left:Number,right:Number,top:Number,bottom:Number}

| Param | Type                     |
| ----- | ------------------------ |
| event | <code>Event</code>       |
| el    | <code>HTMLElement</code> |

<a name="isElement"></a>

## isElement(obj) ⇒ <code>Boolean</code>

detect if obj is an element or document

**Kind**: global function

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

<a name="isEscape"></a>

## isEscape(event) ⇒ <code>Boolean</code>

detect if user presses Escape key, just demonstrate how to handle keyCode compatibility

**Kind**: global function

| Param | Type               |
| ----- | ------------------ |
| event | <code>Event</code> |

<a name="htmlEncodeByDom"></a>

## htmlEncodeByDom(text) ⇒ <code>String</code>

encode user input to avoid evil script

**Kind**: global function  
**Returns**: <code>String</code> - encoded text

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| text  | <code>String</code> | user input value |

**Example**

```js
htmlEncodeByDom('<script></script>') //&lt;script&gt;&lt;/script&gt;
```

<a name="htmlDecodeByDom"></a>

## htmlDecodeByDom(text) ⇒ <code>String</code>

decode user input to show original text

**Kind**: global function  
**Returns**: <code>String</code> - decoded text

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| text  | <code>String</code> | user input value |

**Example**

```js
htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;') //<script></script>
```

<a name="isLandscape"></a>

## isLandscape() ⇒ <code>Boolean</code>

detect whether the screen orientation is landscape

**Kind**: global function
