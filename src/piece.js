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

const combinations = piece.map((peca) => piece.map((p) => [peca, p])).flat()

console.log(combinations)

module.exports = {
  piece,
  combinations
}
