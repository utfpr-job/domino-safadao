const isSameArray = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)

const mountGraph = (searchFn = null) => (player1Pieces = [[-1, -1]]) => (player2Pieces = [[-1, -1]]) => (valuesObjective = [-1]) => {

  const mountNodeTree = (prevPieceSide = -1) => (actualPieces = [[-1, -1]]) => (nextPieces = [[-1, -1]]) => {
    const playablePieces = actualPieces.filter((piece) => piece.includes(prevPieceSide))

    if (!playablePieces.length) return []

    if (searchFn) {
      const bestPiece = searchFn({ prevPieceSide, actualPieces, nextPieces })

      const anotherPieces = actualPieces.filter((p) => !isSameArray(bestPiece, p))
      const notPlayableSide = bestPiece[0] === prevPieceSide ? bestPiece[1] : bestPiece[0]

      return {
        piece: bestPiece,
        nextNode: mountNodeTree(notPlayableSide)(nextPieces)(anotherPieces)
      }
    }

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
