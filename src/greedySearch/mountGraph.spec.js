const { mountGraph } = require('./mountGraph')
const { greedySearch }= require('./greedyResult')

describe('mountGraph', () => {
  it('1.', () => {
    const playerPieces = [[0, 0], [0, 1]]
    const piecesObjective = [0, 2]
    const nodes = mountGraph(playerPieces)(...piecesObjective)
    expect(nodes).toEqual([{
      piece: [-1, 0],
      nextNode: [{
        piece: [0, 0],
        nextNode: [{
          piece: [0, 1],
          nextNode: []
        }]
      }, {
        piece: [0, 1],
        nextNode: []
      }]
    }, {
      piece: [-1, 2],
      nextNode: []
    }])
  })
  it('2.', () => {
    const playerPieces = [[200, 1], [20, 5], [2, 100], [200, 50], [50, 10]]
    const piecesObjective = [200, 10]
    const nodes = mountGraph(playerPieces)(...piecesObjective)
    expect(nodes).toEqual([{
      piece: [-1, 200],
      nextNode: [{
        piece: [200, 1],
        nextNode: []
      }, {
        piece: [200, 50],
        nextNode: [{
          piece: [50, 10],
          nextNode: []
        }]
      }]
    }, {
      piece: [-1, 10],
      nextNode: [{
        piece: [50, 10],
        nextNode: [{
          piece: [200, 50],
          nextNode: [{
            piece: [200, 1],
            nextNode: []
          }]
        }]
      }]
    }])
  })
  it('3.', () => {
    const playerPieces = [
      [ 2, 20 ],     [ 0.1, 5 ],
      [ 0.25, 20 ],  [ 0.5, 200 ],
      [ 0.05, 5 ],   [ 20, 0.25 ],
      [ 0, 2 ],      [ 50, 200 ],
      [ 200, 5 ],    [ 0.25, 0.5 ],
      [ 0, 20 ],     [ 200, 0 ],
      [ 0.5, 0.05 ]
    ]
    const piecesObjective = [ 10, 0.25 ]
    const nodes = mountGraph(playerPieces)(...piecesObjective)
    // console.log(JSON.stringify(nodes))
    expect(nodes).toEqual([
      {
        piece: [
          -1,
          10
        ],
        nextNode: []
      },
      {
        piece: [
          -1,
          0.25
        ],
        nextNode: [
          {
            piece: [
              0.25,
              20
            ],
            nextNode: [
              {
                piece: [
                  2,
                  20
                ],
                nextNode: [
                  {
                    piece: [
                      0,
                      2
                    ],
                    nextNode: [
                      {
                        piece: [
                          0,
                          20
                        ],
                        nextNode: [
                          {
                            piece: [
                              20,
                              0.25
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              0.05,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  0.05
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          200,
                                          0
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.05,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              200,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  50,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  200,
                                                  0
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
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
                        piece: [
                          200,
                          0
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.5,
                              200
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      20,
                                      0.25
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0.5,
                                  0.05
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.05,
                                      5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.1,
                                          5
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              50,
                                              200
                                            ],
                                            nextNode: []
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
                            piece: [
                              50,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              200,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.5,
                                          200
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              50,
                                              200
                                            ],
                                            nextNode: []
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          0.25,
                                          0.5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              20,
                                              0.25
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
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
                piece: [
                  20,
                  0.25
                ],
                nextNode: [
                  {
                    piece: [
                      0.25,
                      0.5
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.5,
                          200
                        ],
                        nextNode: [
                          {
                            piece: [
                              50,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              200,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            piece: [
                              200,
                              0
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0,
                                  2
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
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
                        piece: [
                          0.5,
                          0.05
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.05,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  200,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      50,
                                      200
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      200,
                                      0
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
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
                piece: [
                  0,
                  20
                ],
                nextNode: [
                  {
                    piece: [
                      0,
                      2
                    ],
                    nextNode: [
                      {
                        piece: [
                          2,
                          20
                        ],
                        nextNode: [
                          {
                            piece: [
                              20,
                              0.25
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              0.05,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  0.05
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          200,
                                          0
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.05,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              200,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  50,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  200,
                                                  0
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
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
                    piece: [
                      200,
                      0
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.5,
                          200
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.25,
                              0.5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  20,
                                  0.25
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            piece: [
                              0.5,
                              0.05
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.1,
                                      5
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      200,
                                      5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
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
                        piece: [
                          50,
                          200
                        ],
                        nextNode: []
                      },
                      {
                        piece: [
                          200,
                          5
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.1,
                              5
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              0.05,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.5,
                                  0.05
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.25,
                                      0.5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          20,
                                          0.25
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
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
            piece: [
              20,
              0.25
            ],
            nextNode: [
              {
                piece: [
                  2,
                  20
                ],
                nextNode: [
                  {
                    piece: [
                      0,
                      2
                    ],
                    nextNode: [
                      {
                        piece: [
                          0,
                          20
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.25,
                              20
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              0.05,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  0.05
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          200,
                                          0
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.05,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              200,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  50,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  200,
                                                  0
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
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
                        piece: [
                          200,
                          0
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.5,
                              200
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.25,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0.5,
                                  0.05
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.05,
                                      5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.1,
                                          5
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              50,
                                              200
                                            ],
                                            nextNode: []
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
                            piece: [
                              50,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              200,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.5,
                                          200
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              50,
                                              200
                                            ],
                                            nextNode: []
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          0.25,
                                          0.5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.25,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
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
                piece: [
                  0.25,
                  20
                ],
                nextNode: [
                  {
                    piece: [
                      0.25,
                      0.5
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.5,
                          200
                        ],
                        nextNode: [
                          {
                            piece: [
                              50,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              200,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            piece: [
                              200,
                              0
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0,
                                  2
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
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
                        piece: [
                          0.5,
                          0.05
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.05,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.1,
                                  5
                                ],
                                nextNode: []
                              },
                              {
                                piece: [
                                  200,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      50,
                                      200
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      200,
                                      0
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
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
                piece: [
                  0,
                  20
                ],
                nextNode: [
                  {
                    piece: [
                      0,
                      2
                    ],
                    nextNode: [
                      {
                        piece: [
                          2,
                          20
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.25,
                              20
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  0.5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      },
                                      {
                                        piece: [
                                          200,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              0.05,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  0.05
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          200,
                                          0
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.5,
                                      0.05
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.05,
                                          5
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.1,
                                              5
                                            ],
                                            nextNode: []
                                          },
                                          {
                                            piece: [
                                              200,
                                              5
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0.5,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  50,
                                                  200
                                                ],
                                                nextNode: []
                                              },
                                              {
                                                piece: [
                                                  200,
                                                  0
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
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
                    piece: [
                      200,
                      0
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.5,
                          200
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.25,
                              0.5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            piece: [
                              0.5,
                              0.05
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.05,
                                  5
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.1,
                                      5
                                    ],
                                    nextNode: []
                                  },
                                  {
                                    piece: [
                                      200,
                                      5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
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
                        piece: [
                          50,
                          200
                        ],
                        nextNode: []
                      },
                      {
                        piece: [
                          200,
                          5
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.1,
                              5
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              0.05,
                              5
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.5,
                                  0.05
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.5,
                                      200
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          50,
                                          200
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.25,
                                      0.5
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.25,
                                          20
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
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
            piece: [
              0.25,
              0.5
            ],
            nextNode: [
              {
                piece: [
                  0.5,
                  200
                ],
                nextNode: [
                  {
                    piece: [
                      50,
                      200
                    ],
                    nextNode: []
                  },
                  {
                    piece: [
                      200,
                      5
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.1,
                          5
                        ],
                        nextNode: []
                      },
                      {
                        piece: [
                          0.05,
                          5
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.5,
                              0.05
                            ],
                            nextNode: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    piece: [
                      200,
                      0
                    ],
                    nextNode: [
                      {
                        piece: [
                          0,
                          2
                        ],
                        nextNode: [
                          {
                            piece: [
                              2,
                              20
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      20,
                                      0.25
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  20,
                                  0.25
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      0.25,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0,
                                  20
                                ],
                                nextNode: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        piece: [
                          0,
                          20
                        ],
                        nextNode: [
                          {
                            piece: [
                              2,
                              20
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0,
                                  2
                                ],
                                nextNode: []
                              }
                            ]
                          },
                          {
                            piece: [
                              0.25,
                              20
                            ],
                            nextNode: [
                              {
                                piece: [
                                  20,
                                  0.25
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            piece: [
                              20,
                              0.25
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0.25,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
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
                piece: [
                  0.5,
                  0.05
                ],
                nextNode: [
                  {
                    piece: [
                      0.05,
                      5
                    ],
                    nextNode: [
                      {
                        piece: [
                          0.1,
                          5
                        ],
                        nextNode: []
                      },
                      {
                        piece: [
                          200,
                          5
                        ],
                        nextNode: [
                          {
                            piece: [
                              0.5,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              50,
                              200
                            ],
                            nextNode: []
                          },
                          {
                            piece: [
                              200,
                              0
                            ],
                            nextNode: [
                              {
                                piece: [
                                  0,
                                  2
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.25,
                                          20
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              20,
                                              0.25
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          20,
                                          0.25
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              0.25,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  20
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        piece: [
                                          0,
                                          20
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                piece: [
                                  0,
                                  20
                                ],
                                nextNode: [
                                  {
                                    piece: [
                                      2,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0,
                                          2
                                        ],
                                        nextNode: []
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      0.25,
                                      20
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          20,
                                          0.25
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    piece: [
                                      20,
                                      0.25
                                    ],
                                    nextNode: [
                                      {
                                        piece: [
                                          0.25,
                                          20
                                        ],
                                        nextNode: [
                                          {
                                            piece: [
                                              2,
                                              20
                                            ],
                                            nextNode: [
                                              {
                                                piece: [
                                                  0,
                                                  2
                                                ],
                                                nextNode: []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ])
  })
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
