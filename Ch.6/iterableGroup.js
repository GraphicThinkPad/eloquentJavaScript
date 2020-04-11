class Group {
  constructor() { 
      this.instance = [];
  }
  add(element) { 
      if ( !this.instance.includes(element) ) {
          this.instance.push(element);
      }
  }
  delete(element) { 
      this.instance = this.instance.filter(item => item != element)
  }
  has(element) { 
      if (this.instance.includes(element)) return true;
      else return false;
  }
  static from(iterableItem) { 
      let newGroup = new Group;
      for (let iteration of iterableItem) {
          newGroup.add(iteration);
      }
      return newGroup;
  }
  [Symbol.iterator] = function() {
      return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
      this.group = group;
      this.i = 0
  }
  next() {
      let thing = this.group.instance[this.i];
      if (thing === undefined) return {done: true};
      this.i++;
      return {value: thing, done: false};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
console.log(value);
}
// → a
// → b
// → c