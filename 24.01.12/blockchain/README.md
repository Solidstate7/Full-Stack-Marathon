# Blockchain

## Bitcoin

- 블록이라는 객체 데이터 집합

- P2P 방식 기반

- 분산 컴퓨팅 기반 원장 데이터 저장 환경 (임의 수정 불가, 투명적 공개)

## Block?

다수의 transaction을 하나로 관리하기 위한 객체

## Transaction

송금 등의 거래 정보

- 업무 최소 형태
- 누군가에게 돈을 보냈다는 걸 서명과 함께 블록에 기록

## P2P

- Peer to peer
- Decentralized system
- 서로가 서로에게 클라이언트이자 서버

## 원장 관리

- 거래에 대한 정보를 기록한 원본 문서
- 원장 관리란 거래에 대한 기록을 관리하는 기술을 말한다.

## 개인 vs 개인 거래

- 금융 기관을 거치지 않은 탈중앙적 거래

### 문제점 해결

중앙 기관 없이 해쉬 기반의 작업 증명을 거쳐 이중 지불을 막는다.

### Longest Chain Rule

## 블록체인 4대 요소

1. Transaction Data (POW, POS, POA)
2. 분산 네트워크
3. 암호화
4. 합의 알고리즘

## 블록의 구성

- 블록은 특정 정보를 담아놓은 객체
- Header & Body

## Block Header

- 버전 정보
- 이전 블록 해시
- 몇 번째 블록인지 정보 (높이) 배열의 인덱스
- 타임스탬프
- 블록 해시
- 머클 루트 (거래 위변조 방지)
- 블록 난이도 (조건 만족까지 연산)
  - 논스

## Block Body

- 블록에 저장된 데이터 (트랜잭션의 내용)

### 작업 증명 (Proof of Work)

- 비트코인 연산 합의 알고리즘 (최초의 합의 알고리즘)
- 새로운 블록을 추가하려면 난이도에 맞는 값을 찾는 퀴즈 반복
- 높은 에너지 소비 환경 오염

### 지분 증명 (Proof of Stake)

- 예치량에 비례한 확률로 채굴 권한
- 비잔틴 결함의 위협
- 환경 친화적

### 권위 증명 (Proof of Authority)

- 기관에서 사용할 노드 증명, 합의

### 블록체인의 거래정보 변경이 불가능한 이유

- 블록의 머클루트 계산에 이전 블록의 해시가 포함되어 있다.
- 다음 블록의 해시가 이전 블록의 해시와 맞지 않기 때문에 블록의 연결이 끊김.

### Example

```js
const block = {
  version: "1.0.0",
  height: 0,
  timestamp: Date.now(),
  previousHash: "0".repeat()
  merkleRoot
  nonce
  difficutly
  data
}
```
