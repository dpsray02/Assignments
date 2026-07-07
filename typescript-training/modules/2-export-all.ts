 const PI : number = 3.14;

 function add(a: number, b: number): number {
    return a + b;
}

let name: string = "John Doe";

function greet(): string {
    return `Hello, ${name}!`;
}

export { PI, add, name, greet };

// we need to use export statement only once at the end of the module to export all the variables and functions from the module.