import { INITIAL_STORAGE, STORAGE_NAME } from "./const.js";

class Storage {
    name
    storage
    constructor(StorageName = STORAGE_NAME) {
        this.name = StorageName
        this.storage = localStorage.getItem(this.name)
    }

    get() {
        //localstorage.getItem의 return이 null일 경우
        if(!this.storage) return INITIAL_STORAGE
        return JSON.parse(this.storage)
    }

    set(item) {
        const storage = this.get()
        const serialize = JSON.stringify([...storage, item])
        localStorage.setItem(this.name, serialize)
    }
    
    clear() {
        localStorage.setItem(this.name, "[]")
    }
}

export default Storage

const storage = new Storage()
/*{
    name:"board",
    storage:null | "[]",
    get(),
    set(item),
    clear(),
}*/

/* 
storage.name
storage.storage
get()
set()
clear()
*/
