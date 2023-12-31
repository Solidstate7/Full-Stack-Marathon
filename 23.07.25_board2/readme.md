# 프로그래밍

1. 설계

- 게시판 만들자
- 회원가입
- 로그인
- 글쓰기
  - 여러 정보: 추천, 조회수, 날짜...
- 댓글창
- 검색
- 페이징

## 위를 봤을 때 흐름은?

```mermaid
flowchart TB

A[게시판 목록] --로그인 버튼--> B[로그인 창]
B --로그인 성공--> A
B --로그인 실패--> C[로그인 실패 알림] --> B
A --글쓰기 버튼--> D[글 작성]
D --글 작성 성공--> E[해당 글 페이지]
A --글 제목--> E --뒤로 가기--> A
E --> F[글 수정] --수정 완료/취소--> E
E --다른 글 제목--> G[다른 글 페이지] --> E
G --홈 버튼--> A
```

```mermaid
flowchart TB

A[게시판 목록]
A --글쓰기 버튼--> D[글 작성]
D --글 작성 성공--> E[해당 글 페이지]
A --글 제목--> E --홈버튼--> A
E --수정 버튼--> D --수정 완료/취소--> E

```

- 게시글 목록

  - 출력 방법(V)
  - html, css, js
  - table (list)
    - table 사용법 숙지, R&D
  - grid
  - 헤더:
    - 번호
    - \*제목
    - \*글쓴이
    - 작성일
    - 조회수
  - 저장 방법(M)
    - localStorage 이용

---

- 글 작성
  - 출력 방법(V)
  - 작성 가능 목록
    - 글쓴이
    - 제목
    - 내용
  - 작성 불가능 목록
    - 작성일
    - 조회수
    - 추천수

---

2. 구현

   1. 게시글 목록
   2. 글 작성
   3. 게시글 페이지

---

3. 테스트
