// import sdk from './1-initialize-sdk.js';
const { sdk } = require("./1-initialize-sdk");

const bundleDrop = sdk.getBundleDropModule(
  "0xfd1e14bA0aA9A5ff464c466cb84e6eA94693fDcD"
);

exports.updateWhitelist = async () => {
  console.log("haef");
  try {
    const factory = bundleDrop.getClaimConditionFactory();
    // const result = await bundleDrop.getAllClaimConditions(0);

    // Specify conditions.
    const allowList = ["0xaf5144eCca7B93F58Fb4239d052c73e9063Ca3af"];
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
