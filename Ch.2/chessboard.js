let size = 8;
let boardString = "";

for (let verticalCounter = 0; verticalCounter < size; verticalCounter++) {
    for (let horizontalCounter = 0; horizontalCounter <= size; horizontalCounter++) {
        //The below line is what I couldn't piece out on my own. 
				//An even space on an odd line is different than the opposite.
        if ((horizontalCounter + verticalCounter) % 2 == 0) {
            boardString += "#";
        } else {
            boardString += " ";
        }
    boardString += "\n";
  }
}

console.log(boardString);