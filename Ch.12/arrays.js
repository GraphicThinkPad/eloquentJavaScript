const {specialForms, topScope, run} = require("./egg.js")

// Modify these definitions...

topScope.array = (...values) => {
  let result = []
  result.push(...values);
  return result;
}

topScope.length = "...";

topScope.element = "...";

run(`
  print(array(1, 2, 3))
`)

// run(`
// do(define(sum, fun(array,
//      do(define(i, 0),
//         define(sum, 0),
//         while(<(i, length(array)),
//           do(define(sum, +(sum, element(array, i))),
//              define(i, +(i, 1)))),
//         sum))),
//    print(sum(array(1, 2, 3))))
// `);
// → 6