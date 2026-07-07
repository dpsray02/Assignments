let firstName:string="Krishu";
let lastName:string="Samantaray";
let fullname:string = `the fullname is : ${firstName} ${lastName}`

console.log(fullname);


//2
let mainString: string = " Username : Admin | Password : admin123 ";
console.log(mainString);

// Total no chatr
console.log(`The total  no of chas is: ${mainString.length}`)

// method to get a particular inex
let index:number=5;
console.log(`the char at ${index} is : ${mainString.charAt(index)}`);

//unwanted space
console.log(`the trimmed string is :${mainString.trim()}`);

console.log(`string wiyout alphabet:${mainString.replace(/[a-zA-Z]/g,'')}`);

console.log(`string wiyout alphabet:${mainString.replace(/[a-zA-Z0-9]/g,'')}`);

console.log(`string wiyout alphabet:${mainString.replace(/[^a-zA-Z0-9]/g,'')}`);

console.log(`the upper case string is :${mainString.toUpperCase()}`)

console.log(`the upper case string is :${mainString.toLowerCase()}`)

let newString: string=mainString.substring(10,20);

let newSting1:string=mainString.substring(20);

console.log(newString);
console.log(newSting1);


let dynamicString:string[]=mainString.split(" ");

let user:string=dynamicString[3];

console.log(`${user}`);


let std : number|string=10;
let phone:number|string="10";

console.log(`the equal is :${std==phone}`);
console.log(`the equal is :${std===phone}`);
console.log(`the char incluses:${"Krishu".includes("rish")}`);
console.log(`the char startswith:${"Krishu".startsWith("Kri")}`);
console.log(`the char ends with :${"Krishu".endsWith("shu")}`);

let std2:number=8676;
let std1:number=9777;

let stdcode:string=String(std2);

console.log(std1+stdcode);
