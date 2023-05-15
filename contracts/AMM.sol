// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// interface AMM {
    
// }

contract AMM {
    using SafeMath for uint256; // using safemath to bound underflows and overflows
    uint256 totalShares; // total shares issues in the pool
    uint256 totalToken1;  // Stores the amount of Token1 locked in the pool
    uint256 totalToken2;  // Stores the amount of Token2 locked in the pool
    uint256 Kval;            // Algorithmic constant used to determine price (K = totalToken1 * totalToken2)
    uint public feeCharge; // Fee per transaction 

    mapping(address => uint256) public shares; // balance sheet showing lp balances 
    uint256 constant PRECISION = 1_000_000;

    IERC20 immutable Token1;
    IERC20 immutable Token2;

    constructor(address _token1 , address _token2) {
        Token1 = IERC20(_token1); 
        Token2 = IERC20(_token2);
    }

    function setFee(uint _fee) external{
        require(msg.sender==owner(),"Bruh, you dont belong here!");
        feeCharge = _fee;
    }

    function PoolStats() public view returns(uint , uint , uint , uint) {
        return (totalShares , totalToken1 , totalToken2 , Kval);
    }

    function addLiquidity(uint _token1 , uint _token2) public {
        // transfer his/her/it/they tokens to contract
        // calcualte share conditionally if it is init genesis AMM or AMM with liquidity
        // check if equal value of both tokens supplied in correct ratio
        //  if everything goes throw update balances , K , totalshares and sahres mapping

        require(Token1.transferFrom(msg.sender, address(this), _token1), "Token1 TransferFrom failed");
        require(Token2.transferFrom(msg.sender, address(this), _token2), "Token2 TransferFrom Failed");
        uint share;
        if (totalShares == 0) {
            share = 100*PRECISION;
        }else {
            uint share1 = totalShares.mul(_token1).div(totalToken1);
            uint share2 = totalShares.mul(_token2).div(totalToken2);
            require(share1 == share2 , "equal amount of tokens not supplied");
            share=share1;
        }
        require(share > 0 , "valid amount has to be provided");

        totalToken1.add(_token1);
        totalToken2.add(_token2);

        Kval = totalToken1.mul(totalToken2);  

        totalShares.add(share);
        shares[msg.sender] += share;

    }

    function withdrawLiquidity(uint _share) public {
        // call estimatewithdraw function
        // refund tokens to wallet
        // update states
        (uint amountToken1, uint amountToken2) = getWithdrawEstimate(_share);
        
        uint256 feeAmountToken1 = amountToken1.mul(feeRate).div(10000); // calculate the fee amount
        uint256 feeAmountToken2 = amountToken2.mul(feeRate).div(10000); // 10000 = 100% 

        shares[msg.sender] -= _share;
        totalShares -= _share;

        totalToken1 -= (amountToken1.add(feeAmountToken1)); // charge  fee  from the totalToken1
        totalToken2 -= (amountToken2.add(feeAmountToken2)); // charge  fee  from the totalToken2

        Kval = totalToken1.mul(totalToken2);
        require(Token1.transfer(msg.sender, amountToken1), "Token1 transfer failed");
        require(Token2.transfer(msg.sender, amountToken2), "Token2 transfer failed");
    }


    function swapToken1(uint _amtToken1) public {
        // get amt of token2 from estimateToken2GivenToken1 function
        // transferFrom tokens and update states
        // send resulting tokens
        uint amountToken2 = estimateToken2GivenToken1(_amtToken1);
        require(Token1.transferFrom(msg.sender, address(this), _amtToken1), "Token1 TransferFrom failed");
        totalToken1 += _amtToken1;
        totalToken2 -= amountToken2;
        require(Token2.transfer(msg.sender, amountToken2), "Token2 transfer failed");

    }

    function swapToken2(uint _amtToken2) public {
        // get amt of token1 from estimateToken1GivenToken2 function
        // transferFrom tokens and update states
        // send resulting tokens
        uint amountToken1 = estimateToken1GivenToken2(_amtToken2);
        require(Token2.transferFrom(msg.sender, address(this), _amtToken2), "Token1 TransferFrom failed");
        totalToken2 += _amtToken2;
        totalToken1 -= amountToken1;
        require(Token1.transfer(msg.sender, amountToken1), "Token2 transfer failed");
    }

    function estimateToken1GivenToken2(uint _amtToken2) public view returns(uint256 amountToken1) {
        uint256 token2After = totalToken2.add(_amtToken2);
        uint256 token1After = Kval.div(token2After);
        amountToken1 = totalToken2.sub(token2After);
        if(amountToken1 == totalToken2) amountToken1--;
    }

    function estimateToken2GivenToken1(uint _amtToken1) public view returns(uint256 amountToken2)  {
        uint256 token1After = totalToken1.add(_amtToken1);
        uint256 token2After = Kval.div(token1After);
        amountToken2 = totalToken2.sub(token2After);
        if(amountToken2 == totalToken2) amountToken2--;
    }

    function getWithdrawEstimate(uint _share) public view returns (uint token1out , uint token2out) {
        // check if share is less than totalshares
        // calculate amount of token1 and token2 out for given shares
        require(_share <= totalShares , "share must be less than total shares");
        uint token1out = _share.mul(totalToken1).div(totalShares); 
        uint token2out = _share.mul(totalToken2).div(totalShares); 
    }

}
