import { IBlock } from '@core/interface/block.interface';
import { Failable } from '@core/interface/failable.interface';
import { CryptoModule } from '@core/crypto/crypto.module';
import { BlockHeader } from './blockHeader';
import { SHA256 } from 'crypto-js';
import merkle from 'merkle';

export class Block extends BlockHeader implements IBlock {
  hash: string;
  merkleRoot: string;
  nonce: number;
  difficulty: number;
  data: string[];
  constructor(_previousBlock: Block, _data: string[]) {
    super(_previousBlock);
    this.merkleRoot = Block.getMerkleRoot<string>(_data); // Merkle Root Algorithm Method
    this.hash = Block.createBlockHash(this);
    this.nonce = 0;
    this.difficulty = 0;
    this.data = _data;
  }

  static createBlockHash(_block: Block): string {
    const {
      version,
      timestamp,
      height,
      merkleRoot,
      previousHash,
      difficulty,
      nonce,
    } = _block;
    const value: string = `${version} ${timestamp} ${height} ${merkleRoot} ${previousHash} ${difficulty} ${nonce}`;
    return SHA256(value).toString();
  }

  static getMerkleRoot<T>(_data: T[]): string {
    const merkleTree = merkle('sha256').sync(_data);
    return merkleTree.root();
  }

  // Block creation
  // Block Hash
  // Block Validation
  // Mining -> Computation to create a block
  static findBlock(generateBlock: Block) {
    let hash: string;
    let nonce: number = 0;
    // hex to binary
    while (true) {
      nonce++;
      generateBlock.nonce = nonce;
      hash = Block.createBlockHash(generateBlock);
      // nonce가 증가함으로써 블록의 해시값이 변경 된다
      const binary: string = CryptoModule.hashToBinary(hash);
      console.log(binary);
      // POW
      const result: boolean = binary.startsWith(
        '0'.repeat(generateBlock.difficulty)
      );

      if (result) {
        generateBlock.hash = hash;
        return generateBlock;
      }
    }
  }

  static isValidNewBlock(
    _newBlock: Block,
    _previousBlock: Block
  ): Failable<Block, string> {
    // 실패
    if (_previousBlock.height + 1 !== _newBlock.height)
      return { isError: true, value: 'Different Height Error' };
    if (_previousBlock.hash !== _newBlock.hash)
      return { isError: true, value: 'previous Block Hash Error' };
    if (Block.createBlockHash(_newBlock) !== _newBlock.hash)
      return { isError: true, value: 'Block Hash Error' };
    // 유효성 검사 통과
    return { isError: false, value: _newBlock };
  }

  static generateBlock(_previousBlock: Block, _data: string[]): Block {
    const generateBlock = new Block(_previousBlock, _data);
    const newBlock = Block.findBlock(generateBlock);
    return newBlock;
  }
}
