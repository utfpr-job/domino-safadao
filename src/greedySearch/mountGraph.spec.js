const { mountGraph } = require('./mountGraph')

describe('mountGraph', () => {
  it('1.', () => {
    const playerPieces = [[0,0], [0,1]]
    const piecesObjective = [[0,2]]
    const nodes = mountGraph(playerPieces)(piecesObjective)
    expect(nodes).toEqual([{
      piece: [0, 2],
      nextNode: [{
        piece: [0, 0],
        nextNode: [{
          piece: [0, 1],
          nextNode: []
        }]
      }, {
        piece: [0, 1],
        nextNode: [{
          piece: [0, 0],
          nextNode: []
        }]
      }]
    }])
  })
})