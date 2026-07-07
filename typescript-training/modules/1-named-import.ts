import {PI, add,greet,name} from './1-named-export.ts';

console.log(`The value of PI is: ${PI}`);
const sum = add(5, 10);
console.log(`The sum of 5 and 10 is: ${sum}`);
console.log(`Name: ${name}`);
console.log(greet());

