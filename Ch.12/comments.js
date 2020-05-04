const {specialForms, parse, run, topScope} = require("./egg");

// If I ever want to see it, here is the modified space skipper
function skipSpaceOrComments(string) {
  let regEx = /(\s*|#.*\n)*/
  let matched = regEx.exec(string);
  return string.slice(matched[0].length);
}

// console.log(skipSpaceOrComments("# hello\nx"));
console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

// console.log(skipSpaceOrComments(" a # one\n   # two\n()"));
console.log(parse(" a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
