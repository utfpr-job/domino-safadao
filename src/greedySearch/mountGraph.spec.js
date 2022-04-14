const { mountGraph } = require('./mountGraph')

describe('mountGraph', () => {
  it('1.', () => {
    const player1Pieces = [[0, 0], [0, 1]]
    const player2Pieces = [[2, 0], [2, 1]]
    const piecesObjective = [0, 2]
    const nodes = mountGraph(player1Pieces)(player2Pieces)(piecesObjective)
    expect(nodes).toEqual([
      {
        piece: [-1, 0],
        nextNode: [
          {
            piece: [0, 0],
            nextNode: [
              {
                piece: [2, 0],
                nextNode: [],
              },
            ],
          },
          {
            piece: [0, 1],
            nextNode: [
              {
                piece: [2, 1],
                nextNode: [],
              },
            ],
          },
        ],
      },
      {
        piece: [-1, 2],
        nextNode: [],
      },
    ])
  })
  it('2.', () => {
    const player1Pieces = [[200, 1], [20, 5], [2, 100], [200, 50], [50, 10]]
    const player2Pieces = [[20, 0], [20, 0.5], [50, 1], [200, 200], [50, 0.1]]
    const piecesObjective = [200, 10]
    const nodes = mountGraph(player1Pieces)(player2Pieces)(piecesObjective)
    expect(nodes).toEqual([
      {
        piece: [-1, 200],
        nextNode: [
          {
            piece: [200, 1],
            nextNode: [
              {
                piece: [50, 1],
                nextNode: [
                  {
                    piece: [200, 50],
                    nextNode: [
                      {
                        piece: [200, 200],
                        nextNode: [],
                      },
                    ],
                  },
                  {
                    piece: [50, 10],
                    nextNode: [],
                  },
                ],
              },
            ],
          },
          {
            piece: [200, 50],
            nextNode: [
              {
                piece: [50, 1],
                nextNode: [
                  {
                    piece: [200, 1],
                    nextNode: [
                      {
                        piece: [200, 200],
                        nextNode: [],
                      },
                    ],
                  },
                ],
              },
              {
                piece: [50, 0.1],
                nextNode: [],
              },
            ],
          },
        ],
      },
      {
        piece: [-1, 10],
        nextNode: [
          {
            piece: [50, 10],
            nextNode: [
              {
                piece: [50, 1],
                nextNode: [
                  {
                    piece: [200, 1],
                    nextNode: [
                      {
                        piece: [200, 200],
                        nextNode: [
                          {
                            piece: [200, 50],
                            nextNode: [
                              {
                                piece: [50, 0.1],
                                nextNode: [],
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                piece: [50, 0.1],
                nextNode: [],
              }
            ]
          }
        ]
      }
    ])
  })
})
