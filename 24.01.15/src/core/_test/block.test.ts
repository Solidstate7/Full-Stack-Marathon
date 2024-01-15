import { Block } from '@core/block/block';
import { GENESIS } from '@core/config';

describe('block validation', () => {
  let newBlock: Block;
  let newBlock2: Block;
  it('add block', () => {
    const data = ['tx02'];
    // pow 통과한
    newBlock = Block.generateBlock(GENESIS, data);
    console.log(newBlock);
    const data2 = ['tx03'];
    newBlock2 = Block.generateBlock(newBlock, data2);
    console.log(newBlock2);
  });
});
