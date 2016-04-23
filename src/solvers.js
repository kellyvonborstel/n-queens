// returns a matrix representing a single n x n chessboard, with
// n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n: n});
  var placePiece = function(row) {
    if (row === n) {
      solution = board.rows();
      return;
    }
    for (var column = 0; column < n; column++) {
      board.togglePiece(row, column);
      if (!board.hasAnyRooksConflicts()) {
        placePiece(row + 1);
      } else {
        board.togglePiece(row, column);
      }
    }
  };
  placePiece(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// returns the number of n x n chessboards that exist, with
// n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// returns a matrix representing a single n x n chessboard, with
// n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// returns the number of n x n chessboards that exist, with
// n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
