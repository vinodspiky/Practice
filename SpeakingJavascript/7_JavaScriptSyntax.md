<strong>Conditional statement versus conditional expressions</strong>
<i>if</i>statement conditional statement
<i>conditional operator</i>conditional.Expression


<strong>expression</strong>
An expression produces a value and can be written wherever a value is expected.



<strong>Statement</strong>
 a statement performs an action.

 <strong>IIFE</strong>
 > (function () { return 'abc' }())
'abc'

If you omit the parentheses, you get a syntax error, <strong> because JavaScript sees a function declaration, which can’t be anonymous:</strong>
> function () { return 'abc' }()
SyntaxError: function statement requires a name

If you add a name, you also get a syntax error, 
<strong>because function declarations can’t be immediately invoked:</strong>
> function foo() { return 'abc' }()
SyntaxError: Unexpected token )

<strong>No Semicolon After a Statement Ending with a Block</strong>

example:

while (a > 0) {
    a--;
} // no semicolon

do {
    a--;
} while (a > 0);



<strong>Remarks:</strong>
If you do add a semicolon after a block, you do not get a syntax error, because it is considered an empty statement.

<strong>Three empty Statements</strong>
;;;

<strong>ASI:Automatic Semicolon Insertion</strong>

