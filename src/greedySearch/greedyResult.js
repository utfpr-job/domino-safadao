const greedySearch = (nodes => {
  const res = nodes.map((pieceFather) => {
    if (pieceFather.nextNode && pieceFather.nextNode.length){
      const [first, second] = pieceFather.nextNode[0].piece
      const sum = first + second
      return sum
    } else {
      return 0
    }
  });
  return res.sort()[1];
});


  module.exports = {
    greedySearch
  }
