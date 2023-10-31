# Project

- 게시판 구현
  - CRUD
- 회원가입 구현
- 로그인 구현
- 회원 프로필 구현
- 로그인 인증 실패 시 토큰 변조 알림 메세지 출력 (alert)

- Main Page

  - UI
    - HTML/CSS: 메인 페이지에 슬라이드 구현
  - User 관리 페이지

    - 회원 수정
    - 회원 정보 보기 페이지
    - 회원 탈퇴 페이지
      - 토큰 삭제도 구현

  - 게시판
    - 공지
      - 권한 (level field 넣어서 관리자/사용자 구분)
        - 관리자만 글쓰기/수정/삭제
    - 자유게시판
      - 권한 제한 없음
      - 수정 -> 사용자가 일치할 경우에만
      - 삭제 -> 사용자 일치