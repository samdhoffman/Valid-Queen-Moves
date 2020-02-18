function validCount(move, board, startRow, startCol, curCount) {
  let newRow = startRow + move[0]
  let newCol = startCol + move[1]

  if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
    return validCount(move, board, newRow, newCol, curCount + 1);
  } else {
    return curCount;
  }
}

function numberOfValidMoves(n, queen) {
  let chessBoard = []

  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      if (i != queen[0] && j!= queen[1]) {
        row[j] = "x" // x is invalid
      }
    }
    chessBoard.push(row);
  }

  chessBoard[queen[0]][queen[1]] = "q"
  row = queen[0]
  col = queen[1]

  let numValidMoves = 0

  // row moves --> [north, west, south, east, northwest, northeast, southwest, southeast ]
  const validMoves = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];

  for (let i = 0; i < validMoves.length; i++) {
    let moveCount = validCount(validMoves[i], chessBoard, row, col, 0);

    numValidMoves += moveCount;
  }

  return numValidMoves;

}

let q = [0,1]
numberOfValidMoves(3, q)
