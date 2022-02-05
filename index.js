const express = require("express");
const app = express();
const port = 5000;
const { updateWhitelist } = require("./scripts/4-set-claim-condition");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  await updateWhitelist();
  res.send("Request update whitelist");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
