const boardRepository = require('./board.repository')

exports.getFindAll = async () => {
  try {
    const result = await boardRepository.findAll()
    return result
  } catch (e) {
    throw new Error(e.message)
  }
}

exports.getFindOne = async (id) => {
  try {
    const result = await boardRepository.findone(id)
    return result
  } catch(e) {
    throw new Error(e.message)
  }
}