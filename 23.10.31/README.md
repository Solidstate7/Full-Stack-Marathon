# Websocket

`HTTP` 요청 응답

`Client` <-> `Server`

ws://

HTTP 기반이지만 TCP처럼 full-duplex stream

`Web Socket` 내장 객체 (Plain JS)
`ws` (NodeJS)

`socket.io` external library

-   Namespace
-   Room
-   Broadcast
    ...

`ws` Library

# Websocket Client

채팅: 한 클라이언트가 작성한 내용을, 자기를 제외한 다른 클라이언트들에게 보여줘야 한다. (Broadcast)

# WS가 불편한 이유

1. 메시지 형태가 어렵다.
2. 채팅 그룹 같은 것을 만들기가 어렵다.
3. 데이터 파싱

-> `socket.io`
-> `blockchain` 구현에 있어서 커스텀 프로토콜 구현 필요, 따라서 ws 사용
