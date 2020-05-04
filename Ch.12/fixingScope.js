const {evaluate, define, specialForms, run, topScope} = require("./egg")

// Set should redefine an argument
specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect usage of set");
  }
  let value = evaluate(args[1], scope)
  for (let currentScope = scope; currentScope; currentScope = Object.getPrototypeOf(currentScope)) {
    if (Object.prototype.hasOwnProperty.call(currentScope, args[0].name)) {
      scope[args[0].name] = value;
      return value; /* ? */
    }
  }
  throw new ReferenceError(`Set cannot change the value of a binding not defined elsewhere`)
};


run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);

run(`set(quux, true)`);
// → Some kind of ReferenceError