// we can't have these functions in our 'Helper-hardhat-config'
// since these use the hardhat library
// and it would be a circular dependency

const { run, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

const verify = async (contractAddressk, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddressk,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = {
    verify,
}