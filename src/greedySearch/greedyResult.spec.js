const { mountGraph } = require('./mountGraph')
const { greedySearch }= require('./greedyResult')

describe('greedySearch', () => {
  it('4.', () => {
    const playerPieces = [
      [ 2, 20 ],     [ 0.1, 5 ],
      [ 0.25, 20 ],  [ 0.5, 200 ],
      [ 0.05, 5 ],   [ 20, 0.25 ],
      [ 0, 2 ],      [ 50, 200 ],
      [ 200, 5 ],    [ 0.25, 0.5 ],
      [ 0, 20 ],     [ 200, 0 ],
      [ 0.5, 0.05 ]
    ]
    const piecesObjective = [ 200, 0.25 ]
    const nodes = mountGraph(playerPieces)(...piecesObjective)
    console.log(JSON.stringify(nodes))
    const result = greedySearch(nodes)
    console.log(result)
  })
})
