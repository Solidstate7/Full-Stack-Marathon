import { IBlock, IBlockHeader } from '@core/interface/block.interface';

export class BlockHeader implements IBlockHeader {
  version: string;
  height: number;
  timestamp: number;
  previousHash: string;

  constructor(_previousBlock: IBlock) {
    this.version = BlockHeader.getVersion();
    this.timestamp = BlockHeader.getTimestamp();
    this.height = _previousBlock.height + 1;
    this.previousHash = _previousBlock.hash;
  }

  static getVersion() {
    return '1.0.0';
  }

  static getTimestamp() {
    return new Date().getTime();
  }
}
