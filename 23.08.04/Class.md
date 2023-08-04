# Class

## 분류 (Classification)

새

- 비둘기
- 참새

의자

- 공통된 속성이 존재

의자

다리가 있다
앉을 수 있다
등받이

```js
class 의자 {
    다리가 있다
    앉을 수 있다
    등받이
} // 추상화

const chair = new 의자() // 실체화
```

```js
class 게시판 {
  번호;
  제목;
  내용;
  작성자;
  날짜;
  조회수;
}

const 게시글 = new 게시판("1", "주제", "내용", "작성자", "둥록일", "조회수");
```

```js
const job = {
  job: "senior developer",
  career: "10",
  ageGroup: {
    group: 30,
    person: {
      name: "ingoo",
      id: "web7722",
    },
  },
};

class Job {
  job;
  career;

  constructor(_job, _career) {
    // this = {}
    console.log(_job, _career);
    // return this
  }
}

const job = new Job();
const job2 = new Job();
```
