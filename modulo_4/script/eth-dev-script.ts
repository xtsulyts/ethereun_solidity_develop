const hre=require("hardhat");

async function main() {
    const accounts=await hre.ethers.getSigners();
    const provider=hre.ethers.provider;
    const blockNumber=await provider.getBlockNumber();
    //console.log("exitossss", provider)
    console.log("Block number:", blockNumber)


    for (const account of accounts) {
        console.log(account.address);
        const accountBalance=await provider.getBalance(account.address);
        console.log("The account balance  is:", accountBalance);

    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode=1;
});
