//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SFU is ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;

  uint256 public mintingPrice = 35000000000000000; //  0.035 eth
  address payable public donationAddress = payable(0x165CD37b4C644C2921454429E7F9358d18A45e14);

  constructor() ERC721("AAAA", "AAAA") {}

  function mint(address recipient) external payable {
    require(msg.value >= mintingPrice, "SFU: Requires 0.035 ETH");
    donationAddress.transfer(address(this).balance);

    _safeMint(recipient, _tokenIdTracker.current());
    _tokenIdTracker.increment();
  }

  function tokenURI(uint256 tokenId) public pure override(ERC721) returns (string memory) {
    return "ipfs://QmcX2yikrkhWHfRpezS4naPk1ikNyGBeM4BEaLqawCfPmx/";
  }
}