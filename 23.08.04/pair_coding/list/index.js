const list = []

const listStr = localStorage.getItem("row")
// console.log(listStr)
const listObj = JSON.parse(listStr)
// console.log(listObj)



list.push(listObj)

console.log(list)



const tbody = document.querySelector("tbody")
tbody.innerHTML += `
      <tr>
         <td>${list[0].id}</td>
         <td>${list[0].title}</td>
         <td>${list[0].writer}</td>
         <td>${list[0].date}</td>
         <td>${list[0].view}</td>
     </tr>`