let name : string ="Krishu";

console.log(name);

//for loop
for(let i :number=1; i<=10; i++){
    console.log(name);
}



//while loop
let j :number=1;
let isPageisloaded : boolean=false;

while(j>0){

    if(j>5 || isPageisloaded){
    break;}
    console.log("Refresh the page")
    j++ ;
}

//special cases in loop
//for --of loop
let fruits: string[] =["mango","orange","banana","coconum"]

for(let i:number=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}


for(let fruit of fruits){   // it will print all the values
    console.log(fruit)
}


//for in loop
for