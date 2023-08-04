class Board {
  id;
  title;
  content;
  writer;
  created_at;
  hit;

  constructor(_id, _title, _content, _writer) {
    this.id = _id;
    this.title - _title;
    this.content = _content;
    this.writer = _writer;
    //날짜만드는 코드 생성해서
    this.created_at = "2023-08-04";
    this.hit = 0;
  }
}

const row1 = new Board(1, "hello world", "내용 입니다", "박상현");
const row2 = new Board(2, "hello world", "내용 입니다", "박상현");
const row3 = new Board(3, "hello world", "내용 입니다", "박상현");
const row4 = new Board(4, "hello world", "내용 입니다", "박상현");
const row5 = new Board(5, "hello world", "내용 입니다", "박상현");

const list = [row1, row2, row3, row4, row5];

function template(item) {
  return `
    <tr>
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.content}</td>
    <td>${item.writer}</td>
    <td>${item.hit}</td>
   </tr> 
   `;
}

/*
  {
    id:1
    title:'hello world;
    ...
  }
*/

// function render(html) {

// }

const tbody = document.querySelector("tbody");
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); //
  const html = template(list[i]);
  tbody.innerHTML += html;
}

// query

// tbody.innerHTML = template();

//1.게시글을 만들어주는 클래스를 만든다.

//2. 게시글을 모아둘수 있는 배열을 만든다.

//3. html 이라는 변수를 어떨게 tbody.innerHTML 집어넣느냐
