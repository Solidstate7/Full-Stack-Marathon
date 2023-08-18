# Git

```sh
$ git --version

$ git init
# Initialized empty Git repository in /home/vanit/cli/.git/

$ ls -la
# drwxr-xr-x 7 vanit vanit 4096 Aug 18 09:45 .git
$ rm -rf .git
#.git directory 삭제, git으로 더이상 관리하지 않는다.
```

## Git 사용자 이름과 이메일 설정

```sh
$ git config --global user.name "vanit"
$ git config --global user.email "vanit@gmail.com"
$ git config --global init.defaultBranch main
```

## .git

`.git` 디렉토리: 변경 히스토리 저장소 -> 버전 관리(snapshot)

## Git 기본 실습

Commit message convention

- git commit -m "feat:" 새로운 기능 추가
- fix 버그
- docs 문서
- style 코드 의미에 영향을 주지 않는 변경사항 ( white space, formatting, colons )
- design : 디자인
- test: 테스트
- refactor: 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링
- rename : 이름 변경
- remove : 삭제 반영
