// Learnt from https://odysee.com/@WebDevSimplified:8/i-cannot-believe-javascript-finally:3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy

const people = [
  { name: "Alan", age: 10 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 25 },
  { name: "Eve", age: 30 },
];

let groupOfPeople = Object.groupBy(people, (person) => person.name);

console.log(groupOfPeople);

/*
[Object: null prototype] {
  Alan: [ { name: 'Alan', age: 10 } ],
  Bob: [ { name: 'Bob', age: 15 } ],
  Charlie: [ { name: 'Charlie', age: 20 } ],
  David: [ { name: 'David', age: 25 } ],
  Eve: [ { name: 'Eve', age: 30 } ]
}
*/

// Group by first letter of name
groupOfPeople = Object.groupBy(people, (person) => person.name[0]);

console.log(groupOfPeople);
/*
[Object: null prototype] {
    A: [ { name: 'Alan', age: 10 } ],
    B: [ { name: 'Bob', age: 15 } ],
    C: [ { name: 'Charlie', age: 20 } ],
    D: [ { name: 'David', age: 25 } ],
    E: [ { name: 'Eve', age: 30 } ]
  }
  */
