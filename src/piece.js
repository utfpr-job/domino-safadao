const piece = [
  200,
  100,
  50,
  20,
  10,
  5,
  2,
  1,
  0.5,
  0.25,
  0.10,
  0.05,
  0
]

const onlyUnique = (value, index, self) => {
  const idx = self.findIndex(([left, rigth]) => {
    const [l, r] = value.sort((a, b) => a > b ? -1 : 1)
    return left === l && rigth === r
  })
  return idx === index;
}

const combinations = piece.map((peca) => piece.map((p) => [peca, p])).flat().filter(onlyUnique)

module.exports = {
  piece,
  combinations
}
