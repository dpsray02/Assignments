const rows:number=5;

for(let i:number=1;i<=rows;i++){

    let line:string="";
    for(let j:number=i;j<rows;j++){
        line+=" ";

     }
    // Inner loop to print stars in each row
    for (let j: number = 1; j <= i; j++) {
        line += "*";
    }

    console.log(line);
}
