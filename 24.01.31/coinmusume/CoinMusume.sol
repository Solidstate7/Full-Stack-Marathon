pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"

constant CoinMusume is ERC20 {
  constructor(string memory name, string memory symbol ERC20(name, symbol)) {

    struct Musume {
      string url;
      string name;
    }

    // 이 무스메를 구매한

    struct User {
      address account;
    }

    uint256 private tokenPrice = 10 ether;
  }

  string[] musumeName = ["MARBLEX", "GMTEE", "MATIC"]

  string[] musumeUrl = ["","",""]

  mapping(address => Musume[]) public musumes

  /*
    {
      0x1: [Musme(name, url)]
    }
   */

   User[] public users;

   function getMusume() public view returns (Musume[] memory) {
    return musumes[msg.sender];
   }

   function getMusumeUser() public view returns (User[] memory) {
    return users;
   }

   function buyMusume() public {
    require(balances[msg.sender] >= tokenPrice);
    balances[msg.sender] -= tokenPrice;
    totalSupply -= tokenPrice;

    // provide the item

    uint random = uint(keccak256(abi.encodePacked(block.timestamp, block.coinbase, block.number)))
   }
}