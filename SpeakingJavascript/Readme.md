###########.....Function......############
>If you don’t return anything from a function, undefined is returned (implicitly):
	> function f() { }
	> f()
	undefined



>The Three Roles of Functions in JavaScript
Once you have defined a function as just shown, it can play several roles:
Nonmethod function (“normal function”)
You can call a function directly. Then it works as a normal function. Here’s an example invocation:
id('hello')
By convention, the names of normal functions start with lowercase letters.
Constructor
You can invoke a function via the new operator. Then it becomes a constructor, a factory for objects. Here’s an example invocation:
new Date()
By convention, the names of constructors start with uppercase letters.
Method
You can store a function in a property of an object, which turns it into a method that you can invoke via that object. Here’s an example invocation:
obj.method()
By convention, the names of methods start with lowercase letters.



>Parameter vs Argument

Parameters are used to define a function. They are also called formal parameters and formal arguments. In the following example, param1 and param2 are parameters:
function foo(param1, param2) {
    ...
}
Arguments are used to invoke a function. They are also called actual parameters and actual arguments. In the following example, 3 and 7 are arguments:
foo(3, 7);



>Defining Functions


This section describes three ways to create a function:
Via a function expression
	A function expression produces a value—a function object. For example:
	var add = function (x, y) { return x + y };
	console.log(add(2, 3)); // 5

Via a function declaration
Via the constructor Function()