<a name="module_domUtils"></a>

## domUtils

* [domUtils](#module_domUtils)
    * [.$(selector, [parentNode])](#module_domUtils.$) ⇒ <code>Array</code>
    * [.getElOffsetToEvent(event, el)](#module_domUtils.getElOffsetToEvent) ⇒ <code>Object</code>

<a name="module_domUtils.$"></a>

### domUtils.$(selector, [parentNode]) ⇒ <code>Array</code>
imitate DOM selector`$` in jQuery

**Kind**: static method of [<code>domUtils</code>](#module_domUtils)  
**Returns**: <code>Array</code> - array with target nodes  

| Param | Type | Default |
| --- | --- | --- |
| selector | <code>String</code> |  | 
| [parentNode] | <code>Node</code> | <code>document</code> | 

<a name="module_domUtils.getElOffsetToEvent"></a>

### domUtils.getElOffsetToEvent(event, el) ⇒ <code>Object</code>
get element relative position offset to event

**Kind**: static method of [<code>domUtils</code>](#module_domUtils)  
**Returns**: <code>Object</code> - {left:Number,right:Number,top:Number,bottom:Number}  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 
| el | <code>HTMLElement</code> | 

