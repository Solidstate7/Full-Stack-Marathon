# Linux

## 목차

- 리눅스란
- 리눅스 구조
- 우분투
- 디렉토리 구조
- CLI (Command Line Interface)
- 사용자 계정
- 다운로드

## 리눅스란?

유닉스 기반 OS -> 하드웨어 제어하기 위한 최초 소프트웨어

### 리눅스 구조

카카오톡, 엑셀, 크롬 `응용 프로그램`

`Shell` `OS`

응용 프로그램 -> Shell -> Kernel -> 하드웨어

# 리눅스 특징 구조

`멀티 유저` `멀티 태스킹` `가볍다` `안정성, 보안성, 신뢰성`

ingoo - block8
web7722 - block10

디렉토리 접근 권한 설정

리눅스 CLI, GUI

## 우분투

`Linux` 라는 `OS`에서 하나의 제품군

## CLI

1. 디렉토리 이동
2. 디렉토리 생성
3. 메모장 열기
4. 메모장 입력
5. 파일 저장
6. 파일 닫기
7. 파일 열기

CLI 실습

- pwd : 현재 작업 디렉토리
- cd : 디렉토리 변경 `cd [명령 내용]`
  - ../ 상위 폴더
  - ./ 현재 폴더
  - ~ home directory
- ls : 목록
  ls -l: 상세 표시
  ls -a: 숨김 파일 표시
  ls -la: 상세, 숨김 표시
- mkdir: 디렉토리 생성
- vim editor 사용
- :w write
- :q quit
- :wq write & quit

drwxr-xr-x

`-` 파일
`d` directory
`r` read
`w` write
`x` executable

## 디렉토리 구조

`/`

```sh
$ cd /
```

- /bin : 리눅스의 기본적인 명령어가 저장된 디렉토리
- /etc : 환경설정 관련 저장
- /home : `cd ~ home 제외한 모든 디렉토리가 공용`
- /lib : 커널 모듈 파일과 라이브러리 파일
- /var : log 데이터
- /mnt : 마운트, 새로운 드라이버

## 다운로드

리눅스는 기본적으로 파일을 다운 받을 때 인터넷을 사용한다.

PM(Package Manager)

apt-get / apt
