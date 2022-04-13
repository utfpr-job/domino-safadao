const isSameArray = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)

const mountGraph = (playerPieces = [[0, 0]]) => (piecesObjective = [[0, 0]]) => {

    const mountNodeTree = (prevPieces = [0,0]) => (restPieces = [[0, 0]]) => {
        const [leftSide, rigthSide] = prevPieces

        const playablePieces = restPieces.filter((piece) => piece.includes(leftSide) || piece.includes(rigthSide))

        if (!playablePieces.length) return []

        return playablePieces.map((piece) => {
            const anotherPieces = restPieces.filter((p) => !isSameArray(piece, p))

            return {
                piece,
                nextNode: mountNodeTree(piece)(anotherPieces)
            }
        })
    }

    return piecesObjective.map((actualPiece) => {
        return {
            piece: actualPiece,
            nextNode: mountNodeTree(actualPiece)(playerPieces)
        }
    })
}

module.exports = {
    mountGraph
}