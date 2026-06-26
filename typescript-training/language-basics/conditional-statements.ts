/*if(condition){
    //============
}else if(condition 2){
    //=========
}else if(condition3){

}else{
    default code
}
*/

//Nested If


let percentage : number=79;

if(percentage >=90){
    console.log("grade A")
}else if(percentage >=80){
    console.log("grade B")
}else if(percentage >=70){
    console.log("grade C")
}else {
    console.log("grade D")
}


if(percentage >=90){
    console.log("grade A");
}if(percentage >=95){
    console.log("Ypue uell get a medal")
}else {
    console.log("No medal")
}


// Switch case 

let env:string ='uat';

switch(env) {
    case "dev":
        console.log("launch the dev url" );
        break;
    case "qa":
        console.log("launch the Qa url");
        break;
    case "prod":
        console.log("launch the prod url");
        break;
    default:
        console.log("please provide the correct env");
}
