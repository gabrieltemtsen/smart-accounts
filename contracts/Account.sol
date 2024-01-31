// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@account-abstraction/contracts/interfaces/IAccount.sol";


contract Account is IAccount {

     function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds) external returns (uint256 validationData) {
        return 0;
     }
}