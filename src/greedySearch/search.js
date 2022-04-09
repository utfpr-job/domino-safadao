const { getRandomNumberIntoSize } = require("../helpers")

const searchWithHeuristic = (pieceObjective = [0, 0]) => (playerPieces = [[0, 0]]) => (maxIterators) => {
    let peaks = []
    const piecesToFind = playerPieces
        .filter((playerPiece) => playerPiece.includes(pieceObjective[0]) || playerPiece.includes(pieceObjective[1]))
        .map((playerPiece) => ({
            sum: playerPiece[0] + playerPiece[1],
            pos: playerPieces.findIndex(([part1,part2]) => playerPiece[0] === part1 && playerPiece[1] === part2)
        }))

    console.log({ piecesToFind })

    if (!piecesToFind.length) {
        console.log('jogador sem peças para jogar')
        return []
    }

    const search = (position) => {
        if (piecesToFind?.[position + 1]?.sum > piecesToFind[position].sum) {
            return search(++position)
        }

        if (piecesToFind?.[position - 1]?.sum > piecesToFind[position].sum) {
            return search(--position)
        }

        return playerPieces[piecesToFind[position].pos]
    }

    for (let i = 0; i < maxIterators; i++) {
        peaks.push(search(getRandomNumberIntoSize(piecesToFind.length)))
    }

    console.log(peaks)
    return peaks.sort((a, b) => (a[0] + a[1]) > (b[0] + b[1]) ? -1 : 1)[0]
}

module.exports = {
    searchWithHeuristic
}