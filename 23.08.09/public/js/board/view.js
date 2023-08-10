import { getParams } from "../lib/util.js";
import Storage from "../lib/storage.js";

try{
    const {id} = getParams()
    const storage = new Storage()
    const row = storage.getById(id)
    console.log(row)
} catch(e) {
    console.log(e.message)
    location.href = "./list.html"
}
