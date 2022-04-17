const { getRandomNumberIntoSize } = require("./helpers");
const { combinations } = require("./piece");
const { search } = require("./greedySearch/search");
const { mountGraph } = require("./mountGraph");

const getRandomPieces =
  (combinations = []) =>
  (qty = 0) => {
    let playerPieces = [];

    for (let i = 0; i < qty; i++) {
      const position = getRandomNumberIntoSize(combinations.length);
      const piece = combinations.splice(position, 1);
      playerPieces.push(piece);
    }

    return playerPieces.flat();
  };

let greedy = getRandomPieces(combinations)(13);
let aStar = getRandomPieces(combinations)(13);

const pieceObjective = combinations[
  getRandomNumberIntoSize(combinations.length)
];

const getAStarMove = async ({ pieces, table, player }) => {
  const edges = [table[0][0], table.at(-1)[1]];
  const aStartMove = await fetch(
    "https://peaceful-bastion-30528.herokuapp.com/",
    { method: "POST", body: JSON.stringify({ pieces, table, player }) }
  )
    .then((r) => r.json())
    .catch(console.error);

  // return aStartMove;
  if (aStartMove.side === 'start') {
    return {
      side: aStartMove?.side,
      piece:
        aStartMove?.piece[1] === edges[0]
          ? aStartMove?.piece
          : [aStartMove?.piece[1], aStartMove?.piece[0]],
    };
  }
    return {
      side: aStartMove?.side,
      piece:
        aStartMove?.piece[0] === edges[1]
          ? aStartMove?.piece
          : [aStartMove?.piece[1], aStartMove?.piece[0]],
    };
};

const piecePrice = (p) => (Number(p?.[0]) + Number(p?.[1]) || 0);

const getGreedyMove = async ({ pieces, player, table }) => {
  const edges = [table[0][0], table.at(-1)[1]]
  const greedyMoves = mountGraph(search)(player)(pieces)(edges);

  if (piecePrice(greedyMoves?.[0]?.piece) > piecePrice(greedyMoves[1]?.piece)) {
    const piece = greedyMoves?.[0]?.piece;
    return { piece: piece[1] === edges[0] ? piece : [piece[1], piece[0]], side: "start" }
  }
  const piece = greedyMoves?.[1]?.piece;
  if (!piece) return {}
  return {
    piece: piece[0] === edges[1] ? piece : [piece[1], piece[0]],
    side: "end",
  };
};

const printResult = (info = '') => (greedy) => (aStar) => {
  console.log(info)
  console.log(
    "aStarValue: ",
    aStar.reduce((sum, piece) => sum + piecePrice(piece), 0)
  );
  console.log(
    "greedyValue: ",
    greedy.reduce((sum, piece) => sum + piecePrice(piece), 0)
  );
}

(async () => {
  let table = [pieceObjective];
  let turn = 'greedy'
  let qtdPlayerSemPeca = 0

  const getPlayablePieces = (pieces, table) => pieces.filter((piece) => piece.includes(table[0][0]) || piece.includes(table.at(-1)[1]))
  const buyPieces = (qtd = 1) => getRandomPieces(combinations)(qtd);
  const changeTurn = (turn) => (turn === "greedy" ? "astar" : "greedy");

  const getPlayerMove =
    (fnToFindBestPiece) => (playerPieces) => async  (table) => {
      let playablePieces = [];
      do {
        playablePieces = getPlayablePieces(playerPieces, table);
        if (!playablePieces.length) {
          if (!combinations.length) {
            qtdPlayerSemPeca++
            return {};
          }
          playerPieces.push(buyPieces()[0]);
        }
      } while (!playablePieces.length);
      const bestMove = await fnToFindBestPiece({
        pieces: [...greedy, ...combinations],
        table,
        player: playablePieces,
      });

      return {
        bestMove,
        playerPieces: playerPieces.filter(
          (piece) =>
            !(
              (piece[0] === bestMove?.piece?.[0] &&
                piece?.[1] === bestMove?.piece?.[1]) ||
              (piece[1] === bestMove?.piece?.[0] &&
                piece?.[0] === bestMove?.piece?.[1])
            )
        ),
      };
    };

  const aStarMove = getPlayerMove(getAStarMove);
  const greedyMove = getPlayerMove(getGreedyMove);

  do {
    let pieceToPlay = [];

    if (turn === "greedy") {
      const { bestMove, playerPieces } = await greedyMove(greedy)(table);
      greedy = playerPieces ? playerPieces : greedy;
      pieceToPlay = bestMove;
    }
    if (turn === "astar") {
      const { bestMove, playerPieces } = await aStarMove(aStar)(table);
      aStar = playerPieces ? playerPieces : aStar;
      pieceToPlay = bestMove;
    }

    if (qtdPlayerSemPeca > 2) {
      printResult("empate")(greedy)(aStar);
      return
    }

    if (!pieceToPlay?.side) {
      turn = changeTurn(turn);
      continue;
    }

    if (pieceToPlay.side === "start") {
      table.unshift(pieceToPlay.piece);
    }
    if (pieceToPlay.side === "end") {
      table.push(pieceToPlay.piece);
    }
    // console.log({
    //   pieceToPlay,
    //   table,
    //   aStar: aStar.length,
    //   greedy: greedy.length,
    //   turn,
    // });

    if (!greedy.length) {
      printResult("greedy wins")(greedy)(aStar);
      return
    }
    if (!aStar.length) {
      printResult("aStar wins")(greedy)(aStar);
      return
    }

    turn = changeTurn(turn);
  } while (greedy.length || aStar.length);

})();
