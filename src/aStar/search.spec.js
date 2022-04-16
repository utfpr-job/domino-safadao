const { search } = require("./search")

describe('aStar', () => {
  describe('search', () => {
    it('1. Should call python script', async () => {
      const response = await search(1)
      expect(response).toBe('2\n')
    })
  })
})
