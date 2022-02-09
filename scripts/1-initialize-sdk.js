const { ThirdwebSDK } = require("@3rdweb/sdk");
const ethers = require("ethers");

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
    // process.env.NEXT_PUBLIC_PRIVATE_KEY,
    "4b18997cebb05cb2e0e754e8ce1debf714b57c4c677ac70cd56ae81e62cdc81c",
    // RPC URL, we'll use our Alchemy API URL from our .env file.
    // ethers.getDefaultProvider(process.env.NEXT_PUBLIC_ALCHEMY_API_URL)
    ethers.getDefaultProvider(
      "https://eth-rinkeby.alchemyapi.io/v2/KmeoQ_YlSqr3rV8xx03q-lTD1q2FjdUI"
    )
  )
);

console.log("👍");

exports.sdk = sdk;
