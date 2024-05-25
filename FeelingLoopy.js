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
for (let i = 0; i < csvstrings.length; i++) {
    let char = csvstrings[i]; // Get the current character

    if (char === ',') {
        // When a comma is encountered, move to the next cell
        cellcounter++;
    } else if (char === '\n') {
        // When a /n is encountered, log the current row and reset cells and counter
        console.log(cell1, cell2, cell3, cell4);
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        cellcounter = 1;
    } else {
        // Add the character to the appropriate cell based on the counter
        if (cellcounter === 1) {
            cell1 += char;
        } else if (cellcounter === 2) {
            cell2 += char;
        } else if (cellcounter === 3) {
            cell3 += char;
        } else if (cellcounter === 4) {
            cell4 += char;
        }
    }
}

// Log the last row if the CSV does not end with a newline
if (cell1 || cell2 || cell3 || cell4) {
    console.log(cell1, cell2, cell3, cell4);
}

