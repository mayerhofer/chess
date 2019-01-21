var readline = require('readline');
var validator = require('./chessMove');

var chessBoard = {};

chessBoard.create = () => {
	return [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
}

var util = {};

util.nextChar = (c) => {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

chessBoard.positionToIndex = (position) => {
	var row = position.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
	var col = position.substring(1);

	return ((row *8) + parseInt(col)) -1;
}
chessBoard.posToDim = (pos) => {
	var row = pos.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
	var col = pos.substring(1);

	return {col: col, row: row};
}



chessBoard.indexToPosition = (index) => {
	var temp = index+1;
	var rowNum = (temp / 8);
	var colNum = temp % 8;
	var row = String.fromCharCode("A".charCodeAt(0) + rowNum);
	return row + colNum.toString();
}

chessBoard.print = (board) => {
	console.log('   01 02 03 04 05 06 07 08');
	var row = 'A ';
	var i=0;
	var line = 1;
	while(row.charAt(0) != 'I' || line < 8){
		while(i<8*line){
			if(typeof(board[i]) == 'number'){
				var numer = board[i].toString();
				numer = numer.length == 1 ? '0'+numer : numer;
				row = row + ' ' + numer;
			} else {
				row = row + '   ';
			}
			i++;
		}
		console.log(row);
		row = util.nextChar(row) + ' ';
		line++;
	}
}

chessBoard.getPiece = (board, ref)=>{
	var index = chessBoard.positionToIndex(ref);
	return board[index];
}

chessBoard.movePiece = (board, orig, dest) => {
	var indexOrig = chessBoard.positionToIndex(orig);
	var indexDest = chessBoard.positionToIndex(dest);

	board[indexDest] = board[indexOrig];
	board[indexOrig] = null;
}

var run = (board) => {
	chessBoard.print(boardStart);
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
	rl.question('Next move?', (answer) => {

		var input = answer;
		var move = typeof(input) === 'string' && input.trim().length == 4? input.trim() : false;

		if (!move) {
			console.log("Unrecognized chess move.");
			return;
		}
		var origin = move.substring(0,2).toUpperCase();
		var dest = move.substring(2).toUpperCase();

		var from=chessBoard.posToDim(origin);
		var to=chessBoard.posToDim(dest);
		var inx=chessBoard.getPiece(board, origin);
		console.log(inx);
		console.log(validator[inx]);


		console.log(origin + ' ' + dest);

		chessBoard.movePiece(boardStart, origin, dest);

		chessBoard.print(boardStart);


		rl.close();
		run(board);
	});
}


var boardStart = chessBoard.create();
	
run(boardStart);


