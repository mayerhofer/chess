'use strict';

var util = require('./util');

var chessBoard = {};

chessBoard.create = () => {
	return [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
}
chessBoard.isWhiteByPieceInx = (pieceInx) => {
	return pieceInx >= 16;
}
chessBoard.positionToIndex = (position) => {
	var row = parseInt(position.substring(1));
	var col = position.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);

	return (((8-row)*8) + col);
}
chessBoard.posToDim = (pos) => {
	var row = Number.parseInt(pos.substring(1));
	var col = pos.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;

	return {col: col, row: row};
}
chessBoard.indexToPosition = (index) => {
	var temp = index+1;
	var rowNum = (temp / 8);
	var colNum = temp % 8;
	var row = String.fromCharCode("A".charCodeAt(0) + rowNum);
	return row + colNum.toString();
}
var boardIndexValueToText = (board, index) => {
    if(typeof(board[index]) == 'number'){
        var numer = board[index].toString();
        numer = numer.length == 1 ? '0'+numer : numer;
        return ' ' + numer;
    } else {
        return '   ';
    }
}
chessBoard.print = (board) => {
    // Print header row with column identifiers
    console.log('   A  B  C  D  E  F  G  H');
    
    // Row identifier
    var row = '8 ';
    
	var i=0; // board index
    var line = 1; // line index in printed chess game
    var counter = 0;
    
    // Iterate trough chess game lines to print
	while(counter < 8 || line < 8){

        // Iterate through board elements from current line
		while(i<8*line){
            row = row + boardIndexValueToText(board, i);
			i++;
        }
        
        // Print row
        console.log(row);

        // Start next row
		row = util.nextChar(row) + ' ';
        line++;
        counter++;
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

module.exports = chessBoard;
