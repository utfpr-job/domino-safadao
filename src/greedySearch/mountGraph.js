const isSameArray = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)

const mountGraph = (playerPieces = [[0, 0]]) => (...valuesObjective) => {

    const mountNodeTree = (prevPieceSide) => (restPieces = [[0, 0]]) => {
        const playablePieces = restPieces.filter((piece) => piece.includes(prevPieceSide))

        if (!playablePieces.length) return []

        return playablePieces.map((piece) => {
            const anotherPieces = restPieces.filter((p) => !isSameArray(piece, p))
            const notPlayableSide = piece[0] === prevPieceSide ? piece[1] : piece[0]

            return {
                piece,
                nextNode: mountNodeTree(notPlayableSide)(anotherPieces)
            }
        })
    }

    return valuesObjective.map((actualPiece) => {
        return {
            piece: [-1, actualPiece],
            nextNode: mountNodeTree(actualPiece)(playerPieces)
        }
    })
}

module.exports = {
    mountGraph
}