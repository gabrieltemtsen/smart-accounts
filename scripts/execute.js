
const hre = require("hardhat");

const FACTORY_NONCE = 1;
const FACTORY_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const EP_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const PM_ADDRESS = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788"
async function main() {

   
  const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

  const sender = await hre.ethers.getCreateAddress( {
    from: FACTORY_ADDRESS,
    nonce: FACTORY_NONCE,
  })
  const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
  const [signer0] = await hre.ethers.getSigners();
  const address0 = await signer0.getAddress();
  const initCode = 
  FACTORY_ADDRESS + AccountFactory.interface.encodeFunctionData("createAccount", [address0]).slice(2);

    console.log("sender: ", {sender})

  await entryPoint.depositTo(PM_ADDRESS, {value: hre.ethers.parseEther("100")})
  //CREATE:  hash (sender +nonce)
  
  const Account = await hre.ethers.getContractFactory("Account");

    const userOp = {
        sender, //smart account address
        nonce: await entryPoint.getNonce(sender, 0), 
        initCode,
        callData: Account.interface.encodeFunctionData("execute"),
        callGasLimit: 200_000,
        verificationGasLimit: 800_000,
        preVerificationGas: 50_000,
        maxFeePerGas: hre.ethers.parseUnits("10", "gwei"),
        maxPriorityFeePerGas: hre.ethers.parseUnits("5", "gwei"),
        paymasterAndData: PM_ADDRESS,
        signature: "0x",
    }
 const tx = await entryPoint.handleOps([userOp], address0);
 const receipt = await tx.wait();
 console.log({receipt})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
