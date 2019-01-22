var readline = require('readline');
var validation = require('./chessMove');

var chessBoard = require('./chessBoard');

var isValidChessInput = (input) => {
	if (typeof(input) === 'string' && input.length == 4) {
		var regExp = /[a-h|A-H][1-8][a-h|A-H][1-8]/;
		var myArray = input.match(regExp);

		return myArray != null;
	}
	return false;
}

var runGame = (input, board) => {
	var origin = input.substring(0,2).toUpperCase();
	var dest = input.substring(2).toUpperCase();

	var from=chessBoard.posToDim(origin);
	var to=chessBoard.posToDim(dest);
	var inx=chessBoard.getPiece(board, origin);

	if (! validation[inx.toString()](from, to)) {
		console.log("The piece in " + origin + " cannot move to " + dest + ".");
		return;
	}

	chessBoard.movePiece(board, origin, dest);
	chessBoard.print(board);
}

var run = (board) => {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
	rl.question('Next move?', (answer) => {
		var input = answer.trim();
		if (! isValidChessInput(input)) {
			console.log("Invalid input as next move (valid example:'e2e4').");
		} else {
			runGame(input, board);
		}
		
		rl.close();
		run(board);
	});
}

var boardStart = chessBoard.create();

chessBoard.print(boardStart);
	
run(boardStart);


