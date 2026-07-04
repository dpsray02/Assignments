function login() : void {
     console.log("browser");
    console.log("URL");
    console.log("username");
    console.log("password");
    console.log("login button");
}
// It is call as Static function because it is not returning any value and it is not accepting any parameter
//Calling funtion
login();

function loginWithParameter(username:string,password:string):void{
    console.log("browser");
    console.log("URL");
    console.log(` enter ${username} and ${password}`);
   
}
// It is call as Dynamic function because it is accepting parameter and it is not returning any value
loginWithParameter("krishu", "Krishu123");
loginWithParameter("Anaya ", "Anaya123");


//Function with return type
function loginandGetAccountBalance(username:string,password:string):number{
    console.log("browser");
    console.log("URL");
    console.log(` enter ${username} and ${password}`);
    console.log("click on login button");
    const accountBalance:number = 1000;
    return 1000;
}




//print the account balance
console.log(`Account balance is : ${loginandGetAccountBalance("krishu", "Krishu123")}`);

//function without parameter and with return type

function getCurrentDate():number{
    let date = new Date();
    return date.getFullYear();
}

console.log(`Current year is : ${getCurrentDate()}`);



//function with optional parameter
function printEmployeeDetails(empName:string,empId:number,empAge?:number):void{
    console.log(`Employee name is : ${empName}`);
    console.log(`Employee Id is : ${empId}`);
    if(empAge)// if not menytioned then it will not print as undefined because it is optional parameter
          console.log(`Employee Age is : ${empAge}`);
    
}

printEmployeeDetails("Krishna",12345);
printEmployeeDetails("Anaya",12346,25);

//function with default parameter
function printEmployeeDetailsWithDefault(empName:string,empId:number,comingToMovie:boolean=true):void{
    console.log(`Employee name is : ${empName}`);
    console.log(`Employee Id is : ${empId}`);
   //f(empAge)// if not menytioned then it will not print as undefined because it is optional parameter
  //
    console.log(`Employee coming to movie is : ${comingToMovie}`);
}

    //calling function with default parameter
printEmployeeDetailsWithDefault("Krishna",12345);
printEmployeeDetailsWithDefault("Anaya",12346,false);