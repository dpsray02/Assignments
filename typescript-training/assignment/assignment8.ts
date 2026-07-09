const paragraph:string="Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";


let searchedWordcount: number = 0;

let splittedWord:string[]=paragraph.split(" ");

for (let i: number = 0; i < splittedWord.length; i++) {
    if (splittedWord[i]==="Java") {
        
        console.log(`The searchedword   found at  index ${i}`);
        searchedWordcount++;
        
               
} 

}
console.log(`The total number of wordcount is ${searchedWordcount}`)
