<strong>1.Basic JavaScript</strong>

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
JavaScript has many values like booleans,numbers,array etc.

 All values in JavaScript have properties. Each property has a key (or name) and a value. You can think of properties like fields of a record. You use the dot (.) operator to read a property: value.propKey
Example:
var str = 'abc';
str.length
3

The dot operator is also used to assign a value to a property:

You can use it to invoke methods:
'hello'.toUpperCase()
'HELLO'

<strong>Primitive Values Versus Objects</strong>
The primitive values are booleans, numbers, strings, null, and undefined.

All other values are objects.
<strong>A major difference between the two is how they are compared;

each object has a unique identity and is only (strictly) equal to itself:</strong>

var obj1 = {};  // an empty object
var obj2 = {};  // another empty object
obj1 === obj2
false

obj1 === obj1
true


In contrast, all primitive values encoding the same value are considered the same:
> var prim1 = 123;
> var prim2 = 123;
> prim1 === prim2
true

<strong>Primitive Values</strong>
Properties:
1.Always Immutable
Properties can’t be changed, added, or removed:
> var str = 'abc';

> str.length = 1; // try to change property `length`
> str.length      // ⇒ no effect
3

> str.foo = 3; // try to create property `foo`
> str.foo      // ⇒ no effect, unknown property
undefined

<strong>Remarks:Reading an unknown property always returns undefined.</strong>


<strong>Objects</strong>
The most common kinds of objects are:
	1.Plain objects, which can be created by object literals:
{//this object have two properties
    firstName: 'Jane',
    lastName: 'Doe'
}
	2.Arrays, which can be created by array literals
[ 'apple', 'banana', 'cherry' ]

	3.Regular expressions, which can be created by regular expression literals
	/^a+b+$/


Properties:
	1.Mutable by default

You can normally freely change, add, and remove properties
> var obj = {};
> obj.foo = 123; // add property `foo`
> obj.foo
123

<strong>Undefined and Null</strong>
undefined means “no value.” 
Uninitialized variables are undefined:
> var foo;
> foo
undefined

Missing parameters are undefined:
> function f(x) { return x }
> f()
undefined


If you read a nonexistent property, you get undefined:
> var obj = {}; // empty object
> obj.foo
undefined


null  means “no object.” It is used as a nonvalue whenever an object is expected (parameters, last in a chain of objects, etc.).

<strong>Remarks:undefined and null have no properties, not even standard methods such as toString().

Both undefined and null are considered false

false, 0, NaN, and '' are also considered false
</strong>



<strong>typeof and instanceof</strong>
There are two operators for categorizing values: 
typeof is mainly used for primitive values, 

while instanceof is used for objects.
example:> typeof [] // empty array literal
'object'
<strong>Remarks:typeof null returning 'object' is a bug that can’t be fixed, because it would break existing code. It does not mean that null is an object.</strong>


instanceof looks like this:
	value instanceof Constr
It returns true if value is an object that has been created by the constructor Constr.
> var b = new Bar();  // object created by constructor Bar
> b instanceof Bar
true
> {} instanceof Object
true
> [] instanceof Array
true
> [] instanceof Object  // Array is a subconstructor of Object
true

> undefined instanceof Object
false
> null instanceof Object
false

<strong>Boolean</strong>
Values interpreted as false are called falsy, and values interpreted as true are called truthy.
Boolean(), called as a function, converts its parameter to a boolean.
> Boolean(undefined)
false
> Boolean(0)
false
> Boolean(3)
true
> Boolean({}) // empty object
true
> Boolean([]) // empty array
true

<strong>Binary Logical Operators</strong>
Binary logical operators in JavaScript are short-circuiting. That is, if the first operand suffices for determining the result, the second operand is not evaluated.
false && foo()//foo() never called

<strong>Always using strict equality is recommended.</strong>


All numbers in JavaScript are floating-point:
> 1 === 1.0
true


<strong>Special Numbers</strong>
	1 <strong>NaN(Not a Number)</strong>
	An error values.
	> Number('xyz')  // 'xyz' can’t be converted to a number NaN

	2 <strong>Infinity</strong>
	Also mostly an error value:
> 3 / 0
Infinity
> Math.pow(2, 1024)  <strong>// number too large</strong>
Infinity

<strong>Remarks:Infinity is larger than any other number (except NaN). Similarly, -Infinity is smaller than any other number (except NaN). That makes these numbers useful as default values (e.g., when you are looking for a minimum or a maximum).</strong>


<strong>Strings</strong>
Single characters are accessed via square brackets:
> var str = 'abc';
> str[1]
'b'

Strings are <strong>concatenated</strong> via the plus (+) operator, which converts the other operand to a string if one of the operands is a string:
> var str = '';
> str += 'Multiple ';
> str += 'pieces ';
> str += 'are concatenated.';
> str
'Multiple pieces are concatenated.'


> '\t xyz  '.trim()  // trim whitespace
'xyz'

> 'abc'.indexOf('b')  // find a string
1


<strong>Loop</strong>
break leaves the loop.
continue starts a new loop iteration.



<strong>Functions</strong>
A function expression produces a value and can thus be used to directly pass functions as arguments to other functions:
someOtherFunction(function (p1, p2) { ... });


<strong>Function Declarations Are Hoisted</strong>
Moved in their entirety to the beginning of the current scope. That allows you to refer to functions that are declared later:

function foo() {
    bar();  // OK, bar is hoisted
    function bar() {
        ...
    }
}

<strong>The special Variable-----  arguments</strong>

You can call any function in JavaScript with an arbitrary amount of arguments; the language will never complain. It will, however, make all parameters available via the special variable <strong>arguments</strong>.

<strong>arguments looks like an array, but has none of the array methods:</strong>

> function f() { return arguments }
> var args = f('a', 'b', 'c');
> args.length
3
> args[0]  // read element at index 0
'a'

Missing parameters will get the value undefined:
> f('a')
a undefined
[ 'a' ]
> f()
undefined undefined
[]

while function is defined as below:
function f(x, y) {
    console.log(x, y);
    return toArray(arguments);
}

<strong>Assigning default values to parameters</strong>
function pair(x, y) {
    x = x || 0;  // (1)
    y = y || 0;
    return [ x, y ];
}

> pair()
[ 0, 0 ]
> pair(3)
[ 3, 0 ]
> pair(3, 5)
[ 3, 5 ]


<strong>Enforcing an Arity(a specific number of parameters)</strong>
By using arguments.length
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
    ...
}


<strong>Converting <i>arguments</i> to an Array</strong>
arguments is not an array, it is only array-like.
 It has a property length, and you can access its elements via indices in square brackets. You cannot, however, remove elements or invoke any of the array methods on it. Thus, you sometimes need to convert arguments to an array, which is what the following function does .
 function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject);
}by using //<strong>Array.prototype.slice.call()</strong>



<strong>Exception handlings</strong>
The most common way to handle exceptions is as follows:
function getPerson(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: '+id);
    }
    return { id: id }; // normally: retrieved from database
}

function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}
The try clause surrounds critical code, and the catch clause is executed if an exception is thrown inside the try clause. Using the preceding code:
> getPersons([2, -5, 137])
[Error: ID must not be negative: -5]
[ { id: 2 }, { id: 137 } ]


<strong>Strict Mode</strong>
Strict mode (see Strict Mode) enables more warnings and makes JavaScript a cleaner language (nonstrict mode is sometimes called “sloppy mode”). To switch it on, type the following line first in a JavaScript file or a script tag:

You can also enable strict mode per function:
function functionInStrictMode() {
    'use strict';
}

<strong>Variables Are Hoisted</strong>
he declaration is moved to the beginning of the function, but assignments that it makes stay put.

function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3;  // (1)
    }
}
Internally, the preceding function is executed like this:
function foo() {
    var tmp;  // hoisted declaration
    console.log(tmp);
    if (false) {
        tmp = 3;  // assignment stays put
    }
}


...............................................
<strong>Lexical Scope</strong>
Lexical Scope (also called Static Scope)
Every inner level can access its outer levels.
void fun()
{
    int x = 5;

    void fun2()
    {
        printf("%d", x);
    }
}

Lexical Scoping (aka Closure) defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
...............................................



<strong>Closure</strong>
Simply accessing variables outside of your immediate lexical scope creates a closure.

Each function stays connected to the variables of the functions that surround it, even after it leaves the scope in which it was created. 

function createIncrementor(start) {
    return function () {  // (1)
        start++;
        return start;
    }
}
The function starting in line (1) leaves the context in which it was created, but stays connected to a live version of start:
> var inc = createIncrementor(5);
> inc()
6
> inc()
7
> inc()
8

<strong>Remarks:A closure is a function plus the connection to the variables of its surrounding scopes. Thus, what createIncrementor() returns is a closure.</strong>

Read more about closure at
<a href="http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
">http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
</a>

<strong>IIFE:Immediately-Invoked Function Expression</strong>
Sometimes you want to introduce a new variable scope—for example, to prevent a variable from becoming global.
(function () {  // open IIFE
    var tmp = ...;  // not a global variable
}());  // close IIFE

<strong>. An IIFE is a function expression that is called immediately after you define it. Inside the function, a new scope exists, preventing tmp from becoming global. </strong>



<strong>IIFE use case: inadvertent sharing via closures</strong>

Closures keep their connections to outer variables, which is sometimes not what you want:
var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (1)
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)
The value returned in line (1) is always the current value of i, not the value it had when the function was created. After the loop is finished, i has the value 5, which is why all functions in the array return that value. If you want the function in line (1) to receive a snapshot of the current value of i, you can use an IIFE:
for (var i=0; i < 5; i++) {
    (function () {
        var i2 = i; // copy current i
        result.push(function () { return i2 });
    }());
}


<strong>Objects and Constructor</strong>
jane.newProperty = 'abc';  // property 'newProperty'created automatically

The <strong>in</strong> operator checks whether a property exists:
 'newProperty' in jane
true

<strong>Square bracket to get and set property of Objects</strong>
> var obj = { 'not an identifier': 123 };
> obj['not an identifier']
123
> obj['not an identifier'] = 456;



...............................................
<strong>Extracting Method</strong>
If you extract a method, it loses its connection with the object. On its own, the function is not a method anymore.

lets ahave a scenario--
'use strict';
var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};
We want to extract the method describe from jane, put it into a variable func, and call it. However, that doesn’t work:
> var func = jane.describe;
> func()
TypeError: Cannot read property 'name' of undefined


The solution is to use the method bind() that all functions have. It creates a new function whose this always has the given value:
> var func2 = jane.describe.bind(jane);
> func2()
'Person named Jane'


<strong>Functions Inside a Method</strong>


Every function has its own special variable this. This is inconvenient if you nest a function inside a method, because you can’t access the method’s this from the function. The following is an example where we call forEach with a function to iterate over an array:
var jane = {
    name: 'Jane',
    friends: [ 'Tarzan', 'Cheeta' ],
    logHiToFriends: function () {
        'use strict';
        this.friends.forEach(function (friend) {
            // `this` is undefined here
            console.log(this.name+' says hi to '+friend);
        });
    }
}
Calling logHiToFriends produces an error:
> jane.logHiToFriends()
TypeError: Cannot read property 'name' of undefined
Let’s look at two ways of fixing this. First, we could store this in a different variable:
logHiToFriends: function () {
    'use strict';
    var that = this;
    this.friends.forEach(function (friend) {
        console.log(that.name+' says hi to '+friend);
    });
}
Or, forEach has a second parameter that allows you to provide a value for this:
logHiToFriends: function () {
    'use strict';
    this.friends.forEach(function (friend) {
        console.log(this.name+' says hi to '+friend);
    }, this);
}
Function expressions are often used as arguments in function calls in JavaScript. Always be careful when you refer to this from one of those function expressions.

<strong>Constructor</strong>
constructors—factories for objects—if invoked via the new operator. 

 By convention, the names of constructors start with capital letters.


 <strong>Array</strong>

 The length property indicates how many elements an array has. You can use it to append elements and to remove elements:
 > var arr = ['a', 'b'];
> arr.length
2

> arr[arr.length] = 'c';
> arr
[ 'a', 'b', 'c' ]
> arr.length
3

The in operator works for arrays, too.
<strong>Array Methods</strong>

> var arr = [ 'a', 'b', 'c' ];

> arr.slice(1, 2)  // copy elements
[ 'b' ]
> arr.slice(1)
[ 'b', 'c' ]

> arr.shift()  // remove first element
'a'
> arr
[ 'b', 'c' ]

> arr.unshift('x')  // prepend an element
3
> arr
[ 'x', 'b', 'c' ]

> arr.join('-')  // all elements in a single string
'x-b-c'
> arr.join('')
'xbc'
> arr.join()
'x,b,c'

<strong>Iterating Over Array</strong>
There are several Methods but The two most important ones are <i>forEach</i> and <i>map</i>.

[ 'a', 'b', 'c' ].forEach(
    function (elem, index) {  // (1)
        console.log(index + '. ' + elem);
    });
The preceding code produces the following output:
0. a
1. b
2. c
Note that the function in line (1) is free to ignore arguments. It could, for example, only have the parameter elem.
map creates a new array by applying a function to each element of an existing array:
> [1,2,3].map(function (x) { return x*x })
[ 1, 4, 9 ]




<strong>Regular expressions</strong>





