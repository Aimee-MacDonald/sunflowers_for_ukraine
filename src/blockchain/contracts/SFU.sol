//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SFU is ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;

  uint256 public mintingPrice = 35000000000000000; //  0.035 eth
  address payable public donationAddress = payable(0x165CD37b4C644C2921454429E7F9358d18A45e14);

  event SlavaUkraini(address recipient);

  constructor() ERC721("Sunflowers for Ukraine", "SFU") {}

  function mint(address recipient) external payable {
    require(msg.value >= mintingPrice, "SFU: Requires 0.035 ETH");

    _safeMint(recipient, _tokenIdTracker.current());
    _tokenIdTracker.increment();

    donationAddress.transfer(address(this).balance);
    emit SlavaUkraini(recipient);
  }

  function tokenURI(uint256 tokenId) public pure override(ERC721) returns (string memory) {
    return "ipfs://QmcX2yikrkhWHfRpezS4naPk1ikNyGBeM4BEaLqawCfPmx/";
  }
}