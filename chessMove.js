var validation = {};

var isHorse = function(from, to) {
	return ((to.row==from.row+1||to.row==from.row-1)&&(to.col==from.col+2||to.col==from.col-2))||((to.row==from.row+2||to.row==from.row-2)&&(to.col==from.col+1||to.col==from.col-1));
}
var isTower = (from, to) => {
	return from.col == to.col || from.row == to.row;
}
var isBishop = (from, to) => {
	var sumUpF=8+from.col-from.row;
	var sumUpT=8+to.col-to.row;
	var sumDownF=from.col+to.col;
	var sumDownT=to.col+to.row;

	return sumUpF == sumUpT || sumDownF == sumDownT;
}
var isQueen = (from, to) => {
	return isTower(from, to)||isBishop(from,to);
}
var isKing = (from,to) => {
	return (to.col <= from.col+1 && to.col >= from.col-1)||(to.row>=from.row-1 && to.row <=from.row+1);
}
var isWhitePawn = (from, to) => {
	return isPawn(from,to,true);
}
var isBlackPawn = (from,to) => {
	return isPawn(from,to,false);
}
var isPawn = (from, to, isWhite)=>{
	var start=isWhite?2:7;
	var inc=isWhite?1:-1;

	var basic = from.col == to.col && (from.row == to.row + inc || (from.row == start && to.row == start + (2 * inc)));
	var eat = from.row == to.row+inc&&(to.col==from.col+1||to.col==from.col-1);

	return basic || (eat && to.eat);
}

module.exports = {
	'0': isTower,
	'1': isHorse,
	'2': isBishop,
	'3': isQueen,
	'4': isKing,
	'5': isBishop,
	'6': isHorse,
	'7': isTower,
	'8': isBlackPawn,
	'9': isBlackPawn,
	'10': isBlackPawn,
	'11': isBlackPawn,
	'12': isBlackPawn,
	'13': isBlackPawn,
	'14': isBlackPawn,
	'15': isBlackPawn,
	'16': isWhitePawn,
	'17': isWhitePawn,
	'18': isWhitePawn,
	'19': isWhitePawn,
	'20': isWhitePawn,
	'21': isWhitePawn,
	'22': isWhitePawn,
	'23': isWhitePawn,
	'24': isTower,
	'25': isHorse,
	'26': isBishop,
	'27': isQueen,
	'28': isKing,
	'29': isBishop,
	'30': isHorse,
	'31': isTower,
};

