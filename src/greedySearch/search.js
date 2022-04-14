const { getRandomNumberIntoSize } = require("../helpers")

const search = ({ actualPieces = [[0, 0]] }) => {
  let peaks = []
  const maxIterators = 10

  const piecePrice = (p) => p?.[0] + p?.[1]

  const fn = (position) => {
    const actualPiecePrice = piecePrice(actualPieces[position])

    if (piecePrice(actualPieces?.[position + 1]) > actualPiecePrice) {
      return fn(++position)
    }

    if (piecePrice(actualPieces?.[position - 1]) > actualPiecePrice) {
      return fn(--position)
    }

    return actualPieces[position]
  }

  for (let i = 0; i < maxIterators; i++) {
    peaks.push(fn(getRandomNumberIntoSize(actualPieces.length)))
  }

  return peaks.sort().reverse()[0]
}

module.exports = {
  search
}
