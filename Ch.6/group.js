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
    return (this.instance.includes(element));
  }
  static from(iterableItem) { 
      let newGroup = new Group;
      for (let iteration of iterableItem) {
          newGroup.add(iteration);
      }
      return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group);
// -> Group { instance: [20] }