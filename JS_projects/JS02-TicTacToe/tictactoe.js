const gameBoard = document.querySelector("#gameboard")    /*access to gameboard div*/
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "Cricle goes first"

function createBoard() {
    startCells.forEach((_cell, index) => {      /* _cell หมายถึง ไม่ได้ค่าของตัวแปร cell */
        const cellElement = document.createElement('div') /*create div*/
        cellElement.classList.add('square')      /*add class 'square' to div*/
        cellElement.id = index      /**add id to div by index of startCells variable */
        cellElement.addEventListener('click', addGo) /**add event click and call function addGo */
        gameBoard.append(cellElement)   /*Append the new element to the parent */
    })
}
createBoard() 

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"   /*if go === "circle" return "cross" else return "circle"*/
    infoDisplay.textContent = "it is now " + go + "'s turn."
    e.target.removeEventListener('click', addGo)    /**deleted event -> คลิ๊กช่องเดิมซ้ำไม่ได้ */
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    console.log(allSquares)
    const winnigCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    let winningComboIndex = -1; 

    winnigCombos.forEach((array, index) => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))

        if (circleWins) {
            infoDisplay.textContent = "Circle Wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            winningComboIndex = index
            return
        }
    })

    winnigCombos.forEach((array, index) => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross'))

        if (crossWins) {
            infoDisplay.textContent = "Cross Wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            winningComboIndex = index
            return
        }
    })

    let ids = winnigCombos[winningComboIndex]
    ids.forEach(id => {
        const element = document.getElementById(id.toString()); // Convert the ID to a string and select the element
        if (element) {
          element.classList.add("bg-wins") // Replace "red" with the desired color
        }
      });

    // if (winningComboIndex !== -1) {
    //     console.log("Matching Winning Combination:", winnigCombos[winningComboIndex]);
    // }
}



// Add event listener to the reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    gameBoard.innerHTML = "";    // Clear the game board
    startCells.fill("");    // Reset the startCells array
    createBoard();  // Recreate the game board
    // Reset game state variables
    go = "circle";
    infoDisplay.textContent = "Circle goes first";
}
