

ECMAScript is the official name for JavaScript

JavaScript means the programming language.


ECMAScript is the name used by the language specification. Therefore, whenever referring to versions of the language, people say ECMAScript. The current version of JavaScript is ECMAScript 5; ECMAScript 6 is currently being developed.

You can use expression as a function argument.
myFunction(y >= 0 ? y : -y)


Semicolons are optional in JavaScript. However, I recommend always including them, because otherwise JavaScript can guess wrong about the end of a statement. 

Semicolons terminate statements, but not blocks.
But there is one case you will see a semicolons after a blocks.
var f = function () { };  // function expr. inside var decl.


Roughly, the first character of an identifier can be any Unicode letter, a dollar sign ($), or an underscore (_). Subsequent characters can additionally be any Unicode digit. Thus, the following are all legal identifiers:
arg0
_tmp
$elem

The following three identifiers are not reserved words, but you should treat them as if they were:
Infinity
NaN
undefined

<strong>Values</strong>
