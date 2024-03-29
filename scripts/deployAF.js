
const hre = require("hardhat");

async function main() {

  const af = await hre.ethers.deployContract("AccountFactory");

  await af.waitForDeployment();
  console.log(
    `AF deployed to ${af.target}`
  );
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6   -AF

// 0x610178dA211FEF7D417bC0e6FeD39F05609AD788   -PM

