import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyflowHelloWorld...')

    const args = [
        "Hello, World!", // _helloMessage
    ] as const;

    const { deploymentTransaction } = await hre.viem.sendDeploymentTransaction("AnyflowHelloWorld", args);

    console.log(`Waiting for AnyflowHelloWorld to be deployed... tx: ${deploymentTransaction.hash}`);


    // Let's force a script failure after transactions have been successfully sent
    throw new Error("Forced failure");
}

main()