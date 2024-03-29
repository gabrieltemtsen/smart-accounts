// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@account-abstraction/contracts/interfaces/IAccount.sol";


contract Account is IAccount {
    uint public count;
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

     function validateUserOp(UserOperation calldata , bytes32 , uint256 ) external pure returns (uint256 validationData) {
        return 0;
     }

     function execute() external {
         count++;
     }
}

contract AccountFactory {
    function createAccount(address owner) external returns (address) {
        return address(new Account(owner));
    }
}