var getPieceBody = (pos) => {
    return $("#" + pos).html();
  }
  var getPiece = (pos) => {
    var body = getPieceBody(pos);
    return body.substring(12, 14);
  }
  var getMoves = (pos) => {
    var piece = getPiece(pos);
    var type = piece.substring(1, 2);
    
    var offset = {
      "H": [[2,1],[1,2],[-2,-1],[-1,-2],[-2,1],[-1,2],[2,-1],[1,-2]],
      "T": [],
      "B": [],
      "K": [[1,1],[0,1],[1,0],[-1,1],[1,-1],[-1,-1],[-1,0],[0,-1]]
    }
    for (var i=1;i<8;i++) {
      offset.T.push([i,0]);
      offset.T.push([0,i]);
      offset.T.push([(-1)*i,0]);
      offset.T.push([0,(-1)*i]);
      
      offset.B.push([i,i]);
      offset.B.push([(-1)*i,(-1)*i]);
      offset.B.push([i,(-1)*i]);
      offset.B.push([(-1)*i,i]);
    }
    
    var moves = offset[type];
    
    drawMoves(moves, pos);
  }
  var drawMoves = (moves, pos) => {
    var r = parseInt(pos.substring(1, 2));
    var c = parseInt(pos.substring(0, 1));
    
    for (var i=0; i<moves.length; i++) {
      var r1 = r + moves[i][0];
      var c1 = c + moves[i][1];
      if (c1 >= 0 && r1 >= 0 && c1 < 8 && r1 < 8) {
        var pos1 = c1.toString() + r1.toString();
        $("#" + pos1).first().css( "background-color", "red" );
      }
    }
  }
  var buildHtmlFromPiece = (piece) => {
    return "<div title='" + piece + "' class='piece'><p align='center'>" + piece + "</p></div>"
  }
  var applyPiece = (r, c, piece) => {
    var pos = c.toString() + r.toString();
    $("#" + pos).html(buildHtmlFromPiece(piece));
  }
  var buildBoard = () => {
    var space = 1;
    for (var r=0; r<8; r++) {
      var col = "";
      for (var c=0; c<8; c++) { 
        col += "<td id='" + c.toString() + r.toString() + "' data-pos='"+space+"'></td>"; space++; 
      }
      $("#chessboard").append("<tr>"+col+"</tr>");
    }
  }
  var setInitialPiecesPosition = () => {
    var blackStronger = ["BT", "BH", "BB", "BQ", "BK", "BB", "BH", "BT"];
    var whiteStronger = ["WT", "WH", "WB", "WQ", "WK", "WB", "WH", "WT"];
    
    for (var c = 0; c < 8; c++) {
      applyPiece(0, c, blackStronger[c]);
      applyPiece(7, c, whiteStronger[c]);
      applyPiece(1, c, "BP");
      applyPiece(6, c, "WP");
    }
  }
  var initialize = () => {
    buildBoard();
    setInitialPiecesPosition();
    getMoves("50");
  }
  initialize();
    