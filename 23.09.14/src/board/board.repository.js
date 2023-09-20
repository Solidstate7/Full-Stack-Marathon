const Board = require('./board.entity')

let data = []
// data = [{id:1, name:123}, {id:2, name:456}]
const latestId = () => {
  return data.length + 1
}

exports.findAll = () => {
  return data
}

exports.findOne = (id) => {
  const [board] = data.filter(row => row.id === id)
  return board
}

exports.incrementHit = (id) => { 
  const index = data.findIndex(v => v.id === id)
  data[index].hit += 1
}

exports.create = (title, writer, content) => {
  const id = latestId()
  const board = new Board(id, title, writer, content)
  data.push(board)

  return board
}

exports.update = (id, new_row) => {
  data = data.map(v => {
    if (v.id == id) {
      return new_row
    }
    return v
  }
  )
}

exports.delete = (id) => {
  data = data.filter(v => v.id != id)
}


