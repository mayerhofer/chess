
var npc = {};

npc.pickNextMove = function(board) {
	var possibles = board.getOkMoves();
	var pick = Math.floor(Math.random() * possibles.length);
	return possibles[pick];
}

module.exports = npc;

