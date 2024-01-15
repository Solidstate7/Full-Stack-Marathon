export interface IBlockHeader {
  version: string;
  height: number; // 블록의 순서 0 ~
  timestamp: number;
  previousHash: string;
}

export interface IBlock extends IBlockHeader {
  merkleRoot: string; // 머클루트 해시값
  hash: string; // 블록의 내용을 모두 더해서 해시화 시킨 문자열
  nonce: number; // 몇번이나 연산 작업 시도
  difficulty: number; // POW algorithm
  data: string[];
}
