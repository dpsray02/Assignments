class Employee {

    //properties 

    empId:number= 1234;
    empName :string="Krishu";

    //methhods
    employeesAddress(){
        console.log("Asddress");
    }


}

//Access the dtata from the class

// We need to create an object 
let obje=new Employee();

console.log(obje.empId);
obje.employeesAddress();