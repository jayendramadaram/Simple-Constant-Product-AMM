pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MyToken is ERC20 {
    using SafeMath for uint256;
    address owner;

    modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
    
    constructor() ERC20("My Token", "MTK") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
        owner = msg.sender;
    }

    /**
     * User this function to mint new tokens to address
        * @param account address of account where u wanna send funds to
     * @param amount How many funds u wanna send too
     */
    function mint(address account, uint256 amount) public onlyOwner  {
        _mint(account, amount);
    }
}
