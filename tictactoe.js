//create a blank tic tac toe board

function tictactoeBuilder() {
  let board = [];
  for (let i = 0; i < 3; i++) {
    board.push(new Array(null, null, null));
  }
  return board;
}

console.log(tictactoeBuilder());

function tictactoeChecker(boardArr) {
  let winner = "tie";

  //check rows
  boardArr.map((row) => {
    if (row.every((v) => v === row[0])) {
      winner = row[0];
      return winner;
    }
  });
  //check columns
  for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      if (boardArr[i][j] !== boardArr[i + 1][j]) break;
    }
  }

  return winner;
}

console.log(
  tictactoeChecker([
    ["o", "o", "o"],
    ["x", "o", "x"],
    ["o", "x", "o"],
  ])
);
