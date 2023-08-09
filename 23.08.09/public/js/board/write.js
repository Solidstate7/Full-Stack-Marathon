import BoardRow from "../lib/BoardRow.js";
import Storage from "../lib/storage.js";

const storage = new Storage()
const form = document.querySelector("#writeform")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e);
    // const title = e.target.title.value
    // const writer = e.target.writer.value
    // const content = e.target.content.value

    const {
        title: {value:title},
        writer: {value: writer},
        content: {value: content},
    } = e.target
    // destructuring

    console.log(title, writer, content)
    const dataRow = {
        id:1,
        title: title,
        writer: writer,
        content: content,
    }
    const boardRow = new BoardRow(dataRow)
    storage.set(boardRow)
    
    location.href="/board/view.html?id=1"
})