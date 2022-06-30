const { networkConfig } = require("../helper-hardhat-config")

const { network } = require("hard-hat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    //want to use a mock

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
    })
}
