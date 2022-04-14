// valida se precisa voltar para trás
const validateStates = (_states) => true

const search = () => {
  let states = []

  return ({ prevPieceSide, actualPieces, nextPieces, playablePieces }) => {
    // regra maluca para fazer a decisão
    const bestPiece = playablePieces[0]

    states.push({
      prevPieceSide,
      actualPieces,
      nextPieces,
      playablePieces
    })

    if (!validateStates(states)) {
      // aqui poderia usar o state para recriar a árvore a partir desse ponto, mas não sei fazer ainda kkk
    }

    return bestPiece
  }
}

module.exports = {
  search
}
