/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = 0;
  var newBoard = new Board({'n': n});
  for (var i = 0; i < n; i++) {
    newBoard.togglePiece(i, i);  
  }  
  return newBoard.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var newBoard = new Board({'n': n});
  var findSolutions = function(row, n, newBoard) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyRooksConflicts()) {
        findSolutions(row + 1, n, newBoard);
      }
      newBoard.togglePiece(row, i);
    }
  };
  findSolutions(0, n, newBoard);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0; 
  var newBoard = new Board({'n': n});
  var findSolutions = function(row, n, newBoard) {
    if (row === n) { 
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (newBoard.hasAnyQueensConflicts()) {
        newBoard.togglePiece(row, i);
      } else {
        findSolutions(row + 1, n, newBoard);
        if (solutionCount === 1) {
          return;
        }
        newBoard.togglePiece(row, i);
      }
    } 
  };
  findSolutions(0, n, newBoard);
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionCount));
  return newBoard.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) { 
  var solutionCount = 0; 
  var newBoard = new Board({'n': n});
  var findSolutions = function(row, n, newBoard) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(row, i);
      if (!newBoard.hasAnyQueensConflicts()) {
        findSolutions(row + 1, n, newBoard);
      }
      newBoard.togglePiece(row, i);
    }
  };
  findSolutions(0, n, newBoard);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
