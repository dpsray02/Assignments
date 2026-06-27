
let studentNames : string[] = ["Suresh","Mahesh","Naresh"];

let studentMarks : number[] = [75, 80, 82];

//let studentDetails : [string,number][] = [["Suresh",75],["Mahesh",80],["Naresh",92]];
 let updatedMarks : number[] =[];

for(let i : number=0; i<studentMarks.length;i++){

    updatedMarks[i] = studentMarks[i]! + 10;

}

let totalMarks:number = 0;

for(let i : number=0;i<updatedMarks.length;i++){

    totalMarks=totalMarks + updatedMarks[i]!;
}

let average:number= totalMarks/updatedMarks.length;

console.log("updatedMarks : ");

//for(let studentName of studentNames){
    //console.log(`Student Name: ${studentName} : ${updatedMarks[i] }`);

for(let i:number=0;i<studentNames.length;i++){
    console.log(`${studentNames[i]} : ${updatedMarks[i] }`);
}
console.log(`Average Marks: ${average}`);