class Board {
    id
    title
    content
    writer
    date
    view

    constructor(_id, _title, _content, _writer) {
        this.id = _id;
        this.title = _title;
        this.content = _content;
        this.writer = _writer;
        // 날짜 만드는 코드
        this.date = Date.now()
        this.view = 0
    }
}



const titles = document.getElementById("title")
const contents = document.getElementById("content")
const writers = document.getElementById("writer")


document.getElementById("submit").onclick = () => {
    const row = new Board(1, titles.value, contents.value, writers.value)
    if (localStorage.length == 0) localStorage.setItem("rows" , [])
    else {
    const retrieveList = localStorage.getItem("rows")
    JSON.parse(retrieveList).push(row)
    localStorage.setItem("rows", JSON.stringify(retrieveList))
    }
    window.location.href = "../list/"
}
