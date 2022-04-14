const isSameArray = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)

const mountGraph = (player1Pieces = [[0, 0]]) => (player2Pieces = [[0, 0]]) => (valuesObjective = [0]) => {

  const mountNodeTree = (prevPieceSide) => (actualPieces = [[0, 0]]) => (nextPieces = [[0, 0]]) => {
    const playablePieces = actualPieces.filter((piece) => piece.includes(prevPieceSide))

    if (!playablePieces.length) return []

    return playablePieces.map((piece) => {
      const anotherPieces = actualPieces.filter((p) => !isSameArray(piece, p))
      const notPlayableSide = piece[0] === prevPieceSide ? piece[1] : piece[0]

      return {
        piece,
        nextNode: mountNodeTree(notPlayableSide)(nextPieces)(anotherPieces)
      }
    })
  }

  return valuesObjective.map((actualPiece) => {
    return {
      piece: [-1, actualPiece],
      nextNode: mountNodeTree(actualPiece)(player1Pieces)(player2Pieces)
    }
  })
}

module.exports = {
  mountGraph
}
