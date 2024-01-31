 
 const hre = require("hardhat");
 const EP_ADDR = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
const ACCOUNT_ADDR = "0xCafac3dD18aC6c6e92c921884f9E4176737C052c"
async function main() {

  const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);
  const count = await account.count();
  console.log(count)

//     const code =await hre.ethers.provider.getCode(EP_ADDR)

// console.log(code)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
