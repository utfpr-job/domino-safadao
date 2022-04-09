const { getRandomNumberIntoSize } = require('./helpers')
const { combinations } = require('./piece')
const { searchWithHeuristic } = require('./greedySearch/search')

const getRandomPieces = (combinations = []) => (qty = 0) => {
    let playerPieces = []

    for (let i = 0; i < qty; i++) {
        const position = getRandomNumberIntoSize(combinations.length)
        const piece = combinations.splice(position, 1)
        playerPieces.push(piece)
    }

    return playerPieces.flat()
}

const player1 = getRandomPieces(combinations)(13)
const player2 = getRandomPieces(combinations)(13)

const pieceObjective = combinations[getRandomNumberIntoSize(combinations.length)]

console.log({ player1 })
console.log({ pieceObjective })
console.log(
    'result',
    searchWithHeuristic(pieceObjective)(player1)(1)
)
