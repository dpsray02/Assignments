export{PI,add,subtract}

let PI: number = 3.14;

exportdefault function add(x: number, y: number): number {
    return x + y;
}

 function subtract(x: number, y: number): number {
    return x - y;
}


// we can use default export to export a single variable or function from the module. We can also use named export to export multiple variables or functions from the module.