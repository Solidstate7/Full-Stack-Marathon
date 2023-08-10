import { getParams } from "../lib/util.js";
import Storage from "../lib/storage.js";

try{
    const {id} = getParams()
    const storage = new Storage()
    const row = storage.getById(id)

    const title = document.querySelector("#title")
    const writer = document.querySelector("#writer")
    const content = document.querySelector("#content")

    title.innerHTML = row.title
    writer.innerHTML = row.writer
    content.innerHTML = row.content

} catch(e) {
    alert(e.message)
    location.href = "./list.html"
}
