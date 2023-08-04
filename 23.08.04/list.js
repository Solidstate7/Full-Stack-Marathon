class Board {
    id
    title
    content
    writer
    created_at
    hit

    constructor(_id, _title, _content, _writer) {
        this.id = _id;
        this.title = _title;
        this.content = _content;
        this.writer = _writer;
        // 날짜 만드는 코드
        this.created_at = Date.now()
        this.hit = 0
    }
}

const row1 = new Board(1, "hello world", "내용이다", "web7722")
const row2 = new Board(1, "hello world", "내용이다", "web7722")
const row3 = new Board(1, "hello world", "내용이다", "web7722")
const row4 = new Board(1, "hello world", "내용이다", "web7722")
const row5 = new Board(1, "hello world", "내용이다", "web7722")

const list = [row1, row2, row3, row4, row5]

function template(item) {
    return `
     <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.content}</td>
        <td>${item.writer}</td>
        <td>${item.hit}</td>
    </tr>
    `
}

function tableRows() {
    let html;
    for(let i=0; i<list.length; i++) {
        html = template(list[i])
    }
    return html
}

function render(html) {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML += html
}


function init() {
    const html = tableRows()
    render(html)
}

init()
// function 조립 -> 호출

// list -> array
// class -> object




// 1. 게시글을 만들어주는 클래스를 만든다.

// 2. 게시글을 모아둘 수 있는 배열을 만든다.

// 3. html라는 변수를 어떻게 tbody.innerHTML에 잘 넣느냐.

