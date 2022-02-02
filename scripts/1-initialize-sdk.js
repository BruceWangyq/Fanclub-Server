// import { ThirdwebSDK } from '@3rdweb/sdk';
// import ethers, { ethers } from 'ethers';

const { ThirdwebSDK } = require('@3rdweb/sdk');
const ethers = require('ethers');

//Importing and configuring our .env file that we use to securely store our environment variables
// import dotenv from 'dotenv';
// dotenv.config();

// Some quick checks to make sure our .env is working.
// if (
//   !process.env.NEXT_PUBLIC_PRIVATE_KEY ||
//   process.env.NEXT_PUBLIC_PRIVATE_KEY == ''
// ) {
//   console.log('🛑 Private key not found.');
// }

// if (
//   !process.env.NEXT_PUBLIC_ALCHEMY_API_URL ||
//   process.env.NEXT_PUBLIC_ALCHEMY_API_URL == ''
// ) {
//   console.log('🛑 Alchemy API URL not found.');
// }

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
    // process.env.NEXT_PUBLIC_PRIVATE_KEY,
    '4b18997cebb05cb2e0e754e8ce1debf714b57c4c677ac70cd56ae81e62cdc81c',
    // RPC URL, we'll use our Alchemy API URL from our .env file.
    // ethers.getDefaultProvider(process.env.NEXT_PUBLIC_ALCHEMY_API_URL)
    ethers.getDefaultProvider(
      'https://eth-rinkeby.alchemyapi.io/v2/KmeoQ_YlSqr3rV8xx03q-lTD1q2FjdUI'
    )
  )
);

console.log('heh');

// (async () => {
//   try {
//     const apps = await sdk.getApps();
//     console.log('Your app address is:', apps[0].address);
//   } catch (err) {
//     console.error('Failed to get apps from the sdk', err);
//     process.exit(1);
//   }
// })();

// We are exporting the initialized thirdweb SDK so that we can use it in our other scripts
exports.sdk = sdk;