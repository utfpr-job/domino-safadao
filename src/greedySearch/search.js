const { getRandomNumberIntoSize } = require("../helpers")

const search = ({ playablePieces = [[0, 0]] }) => {
  let peaks = []

  const piecePrice = (p) => p?.[0] + p?.[1]

  const fn = (position) => {
    const actualPiecePrice = piecePrice(playablePieces[position])

    if (piecePrice(playablePieces?.[position + 1]) > actualPiecePrice) {
      return fn(++position)
    }

    if (piecePrice(playablePieces?.[position - 1]) > actualPiecePrice) {
      return fn(--position)
    }

    return playablePieces[position]
  }

  for (let i = 0; i < playablePieces.length; i++) {
    peaks.push(fn(i))
  }

  return peaks.sort().reverse()[0]
}

module.exports = {
  search
}
