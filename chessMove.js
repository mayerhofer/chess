

var validator = {};

var isHorse = (from, to) => {
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
	var start=isWhite?6:1;
	var inc=isWhite?-1:1;
	var basic=from.col==to.col?from.row==to.row+inc:from.row==start && to.row==start+2*inc;
	var eat=from.row==to.row+inc&&(to.col==from.col+1||to.col==from.col-1);

	return basic || (eat && to.eat);
}

validator[ 0]=isTower;
validator[ 1]=isHorse;
validator[ 2]=isBishop;
validator[ 3]=isQueen;
validator[ 4]=isKing;
validator[ 5]=isBishop;
validator[ 6]=isHorse;
validator[ 7]=isTower;
validator[ 8]=isWhitePawn;
validator[ 9]=isWhitePawn;
validator[10]=isWhitePawn;
validator[11]=isWhitePawn;
validator[12]=isWhitePawn;
validator[13]=isWhitePawn;
validator[14]=isWhitePawn;
validator[15]=isWhitePawn;
validator[16]=isBlackPawn;
validator[17]=isBlackPawn;
validator[18]=isBlackPawn;
validator[19]=isBlackPawn;
validator[20]=isBlackPawn;
validator[21]=isBlackPawn;
validator[22]=isBlackPawn;
validator[23]=isBlackPawn;
validator[24]=isTower;
validator[25]=isHorse;
validator[26]=isBishop;
validator[27]=isQueen;
validator[28]=isKing;
validator[29]=isBishop;
validator[30]=isHorse;
validator[31]=isTower;

module.export = validator;

