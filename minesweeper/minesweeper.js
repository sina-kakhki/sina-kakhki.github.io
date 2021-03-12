document.addEventListener('DOMContentLoaded', startGame);
document.addEventListener('click', checkForWin);
document.addEventListener('contextmenu', checkForWin);
// Define your `board` object here!
/*var board = {
  cells: [
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 0, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}
  ]
}*/

var board = {cells: []};

function createBoard(){
    for(r = 0; r < 6; r++) {
        for(c = 0; c < 6; c++) {
          board.cells.push({
            row: r,
            col: c,
            isMine: Math.random() <= 0.2,
            hidden : true
          })
        }
    }
}
createBoard ()

function startGame () {
  var i = 0;
  for  (i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);    
  }
    // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function explosion () {
   let explosion = new Audio('sounds/explosion.mp3');
   let bomb = new Audio('sounds/infidel.mp3');
    for (var i = 0; i < board.cells.length; i++) {
        if (board.cells[i].isMine && !board.cells[i].hidden) {
          explosion.play()
          bomb.play();
        }
    }
}
//document.addEventListener("click", explosion)

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let win = new Audio('sounds/win.mp3');
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && board.cells[i].isMarked !== true) {
        return} else if (board.cells[i].isMine !== true && board.cells[i].hidden === true) {
        return}        
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     
     lib.displayMessage('You win...for now!')
     win.play();    
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0;
  for (i= 0; i < surrounding.length; i++) {
      if (surrounding[i].isMine == true) {
          count++;
      }
  }
  return count
}

function restart () {
  document.location.reload();
}