// import sdk from './1-initialize-sdk.js';
const { followListInfoQuery } = require("../utils/query.js");
// import { closeSync } from "fs";

const { sdk } = require("./1-initialize-sdk");

const bundleDrop = sdk.getBundleDropModule(
  "0xfd1e14bA0aA9A5ff464c466cb84e6eA94693fDcD"
);

const [followListInfo, setFollowListInfo] = useState(null);

const NAME_SPACE = "CyberConnect";
const NETWORK = "ethereum";

exports.followListInfoQuery = async () => {
  const resp = await followListInfoQuery({
    address: "0x148d59faf10b52063071eddf4aaf63a395f2d41c",
  });
  if (resp) {
    setFollowListInfo(resp);
  }
  console.log(111);
  console.log(resp);
};

exports.updateWhitelist = async () => {
  console.log("updateWhitelist");
  try {
    const factory = bundleDrop.getClaimConditionFactory();
    // const result = await bundleDrop.getAllClaimConditions(0);

    // Specify conditions.
    const allowList = [
      "0xaf5144eCca7B93F58Fb4239d052c73e9063Ca3af",
      "0x8Ff7f00Fc3888387e7459785F73769999A65cd57",
      "0xa641599FF42D43752Ea9f1EbaCcAB0F2e4D2C4a3",
    ];
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
