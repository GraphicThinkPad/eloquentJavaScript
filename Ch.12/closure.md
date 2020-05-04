
#Problem:

The way we have defined fun allows functions in Egg to reference the surrounding scope, allowing the function’s body to use local values that were visible at the time the function was defined, just like JavaScript functions do.

The following program illustrates this: function f returns a function that adds its argument to f’s argument, meaning that it needs access to the local scope inside f to be able to use binding a.

run(`
do(define(f, fun(a, fun(b, +(a, b)))),
   print(f(4)(5)))
`);
// → 9

Go back to the definition of the fun form and explain which mechanism causes this to work.

#Solution:
(from the author)

Again, we are riding along on a JavaScript mechanism to get the equivalent feature in Egg. Special forms are passed the local scope in which they are evaluated so that they can evaluate their subforms in that scope. The function returned by fun has access to the scope argument given to its enclosing function and uses that to create the function’s local scope when it is called.

This means that the prototype of the local scope will be the scope in which the function was created, which makes it possible to access bindings in that scope from the function. This is all there is to implementing closure (though to compile it in a way that is actually efficient, you’d need to do some more work).
