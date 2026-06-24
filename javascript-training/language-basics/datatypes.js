let a =10;

a+10;
console.log(a);


/*&let empData ={
    "name" : "Krishu"
    empId : 9533
}

empData.age=35;

console.log("empData");*/



let empName="Krishu";
let empRole="QA";

console.log(typeof empName )
console.log(typeof empRole )

// purpose of backtick


let empData= `emp name is ${empName} and emp role is ${empRole}`;
console.log(empData);


// undefined
 let isRaining = true;
  let isSunny = false;
console.log(typeof isRaining);
console.log(typeof isSunny);

//Null
let salary = 10000;
console.log(salary);
salary = null;
console.log(salary);


// Non Primitive data types

let empName1 = "Krishu";
let empId = 9533;
let visaStatus = true;



let empData1 = {
    "empname" : "Krishu",
    "empId"     : 1234,
    "visaStatus" : true,
    "address" : {
        "city" : "Hyderabad",
        "state" : "Telangana"
    }

}

//Access data from the object

console.log(empData1.visaStatus);
console.log(empData1.address.state);



//*******************ARRAY*******************************************//

let fruits =["mango","orange","banana","coconum"]
console.log(fruits.length);
console.log(fruits[2]);



let fruitsAndPrices =["mango",100,"orange",200,"banana",300,"coconum",400]
console.log(fruitsAndPrices.length)
console.log(fruitsAndPrices[3]);




