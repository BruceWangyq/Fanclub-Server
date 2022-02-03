const express = require("express");
const app = express();
const port = 5000;
const {
  updateWhitelist,
  followListInfo,
} = require("./scripts/4-set-claim-condition");

app.get("/", (req, res) => {
  updateWhitelist();
  followListInfo();
  res.send("Request update whitelist");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
