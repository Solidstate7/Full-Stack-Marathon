# DATABASE (데이터베이스)

- DB 배우는 형태
- Web Server Router 잘 나누기
  - 코드 리뷰
  - 예외 처리 해주기

## DB

`정보`를 `저장`하는 `공간`
`하드디스크`

## DBMS (Database Management System)

DB 관리 프로그램
DBMS 데이터 저장 공간 관리를 도와주는 프로그램 -> 프로세스에 올려야 한다.

Web Server, DBMS -> Process

자원 공유 -> 서로 다른 프로세스 사이에, 즉 Web Server와 DB 간에 통신이 필요하다.

## DBMS 종류

- Oracle
- MySQL
- PostgreSQL
- MSSQL

Oracle -> Top, 유료

MySQL -> 무료, Oracle이 인수

MariaDB

PostgreDB

## 빅데이터

`NoSQL` -> 관계형 / 비관계형으로 분류

## RDBMS (관계형)

Relational Database Management System

따로 빼서 타고 들어간다.

MySQL: 테이블로 데이터 저장

## 비관계형

MongoDB: 객체 형태로 데이터 저장함

## SQL

데이터 관리 언어

# 계획

1. 설치
2. SQL
3. Web Server <--> MySQL

## secure installation

초기 비밀번호 root

1. root 계정 패스워드 (강도)
2. 익명사용자 Y/N
3. 원격 접속 Y
4. Test DB 삭제 여부
5. 권한 테이블 리로드
