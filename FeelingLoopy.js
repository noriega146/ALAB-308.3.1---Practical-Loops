//csv to be processed scrubbed 
const csvstrings = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//variables to store cells 
let cell1='';
let cell2='';
let cell3='';
let cell4='';

//counter to keep track of cell
let cellcounter = 1;

//loop thru each character in csv
for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i]; // Get the current character

