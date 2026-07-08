let senteance:string="Java programming is fun and challenging";

let stringWord: string[]=senteance.split(" ");

console.log(`Total no of words:${stringWord.length}`);


let reverseString:string="";

for(let i:number=stringWord.length-1;i>=0;i--){
    console.log(stringWord[i]);
reverseString=reverseString+" "+ stringWord[ i];
}

console.log(`The reverse order string is :${reverseString}`);


let uppSentance: string = "";

for (let i = 0; i < stringWord.length; i++) {
    const w = stringWord[i];
    if (w && w.length > 0) {
        uppSentance += w.charAt(0).toUpperCase() + w.slice(1) + " ";
    }
}
uppSentance = uppSentance.trim();
console.log(`The sentence with capitalized words: ${uppSentance}`);