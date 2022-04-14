const { mountGraph } = require('./mountGraph')
const { greedySearch }= require('./greedyResult')

describe('greedySearch', () => {
  it('4.', () => {
    const player1Pieces = [[200, 1], [20, 5], [2, 100], [200, 50], [50, 10]]
    const player2Pieces = [[20, 0], [20, 0.5], [50, 1], [200, 200], [50, 0.1]]
    const piecesObjective = [ 200, 0.25 ]
    const nodes = mountGraph(player1Pieces)(player2Pieces)(piecesObjective)
    const result = greedySearch(nodes)
    console.log(result)
  })
})
