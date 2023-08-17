# Linux Shell

쉘 -> 커널 -> 하드웨어

1. bash
2. sh
3. zsh

linux 설치 시 `bash`
mac `bash` -> `zsh`

```sh
zsh --version
$ sudo apt install zsh
sudo chsh -s /usr/bin/zsh
whoami
grep user /etc/passwd
grep user /etc/passwd

$ cd ~
$ source ~/.zshrc
```

# 패키지 매니저

1. APT (Advanced Package Tool)

프로그램 다운로드

# 사용자

`멀티 유저` : 여러 사용자가 동시에 하나의 시스템에 접근

디렉토리와 파일에 권한 부여

`A` 계정
`B` 계정

```sh
$ whoami
# word >> hello world!
$ vim ~/word
# -rw-r--r--  1 vanit vanit     13 Aug 17 10:59 word
# User:6 Group:4 Other User:4
$ cat word
# R : Read 4
# W : Write 2
# X : Execute 1
#[File type][User Permission][Group Permission][Other Permission]
```

# chmod

```sh
$ sudo chmod 444 word
```

`root` 계정

**User 타입**

- 루트 사용자 UID 0
- 시스템 사용자 UIDs 1-999
- 일반 사용자 1000 ~

```sh
$ id
$ id [user]
```

## User 생성

- adduser: 기본 설정
- useradd: 고급 설정

sh 설정 bash/zsh
home directory
group 설정

**useradd**

```sh
$ sudo useradd [id]
# useradd: Permission denied.
# useradd: cannot lock /etc/passwd; try again later.
$ vim /etc/passwd

$ sudo su - vanit2
$ sudo passwd vanit2
```

# Linux Process

프로세스의 일반적 정의

- 실행중 프로그램

CPU 실행되는 모든 프로그램 프로세스

프로그램은 프로세스가 실행될 때마다, 고유의 PID (프로세스 ID 생성)

1초 마다 hello world!
setInterval -> 하나의 프로세스

```sh
$ ps -ef
```

foreground vs background

# Node.js

```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ source ~/.zshrc
```
