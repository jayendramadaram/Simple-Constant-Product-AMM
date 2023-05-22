// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import {AMM} from "./AMM.sol";
import {MyToken} from "./Token.sol";

contract AMMFACTORY {
    event PoolCreated(address PoolAddress , address Token1Address , address Token2Address);
    event TokenCreated(address TokenAddress);

    function CreatePool(address Token1Address , address Token2Address) public returns (address) {
        AMM pool = new AMM(Token1Address , Token2Address);
        emit PoolCreated(address(pool), Token1Address , Token2Address);
        return (address(pool));
    }

    function CreateToken(string memory TokenName) public returns (address) {
        MyToken token = new MyToken(TokenName);
        emit TokenCreated(address(token));
        return (address(token));
    }
}