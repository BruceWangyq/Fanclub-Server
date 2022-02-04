const { followListInfoQuery } = require("../utils/query.js");
const { sdk } = require("./1-initialize-sdk");

const bundleDrop = sdk.getBundleDropModule(
  "0xfd1e14bA0aA9A5ff464c466cb84e6eA94693fDcD"
);

const address = "0x8Ff7f00Fc3888387e7459785F73769999A65cd57";

const followerList = async () => {
  const resp = await followListInfoQuery({
    address,
  });
  const list = resp?.data?.identity?.followers?.list || [];
  const followers = list.map((item) => {
    return item.address;
  });
  console.log(followers);
  return followers;
};

exports.updateWhitelist = async () => {
  console.log("updateWhitelist");
  followerListAddr = followerList();
  try {
    const factory = bundleDrop.getClaimConditionFactory();
    // const result = await bundleDrop.getAllClaimConditions(0);

    // Specify conditions.
    const allowList = followerListAddr;
    const claimPhase = factory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 10000,
      maxQuantityPerTransaction: 1,
    });

    claimPhase.setSnapshot(allowList);

    await bundleDrop.setClaimCondition("0", factory);
    console.log(
      "✅ Successfully set claim condition on bundle drop:",
      bundleDrop.address
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
};
