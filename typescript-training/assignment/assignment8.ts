const paragraph:string="Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";

const searchedWord :string="Java";
let searchedWordcount: number = 0;

let splittedWord:string[]=paragraph.split(" ");

for (let i: number = 0; i < splittedWord.length; i++) {
    if (searchedWord === splittedWord[i]) {
        searchedWordcount++;
        console.log(`The searchedword  '${searchedWord}' found at  index ${i}`);
        
               
} 

}
console.log(`The total number of wordcount is ${searchedWordcount}`)
