const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { code } = req.body;

  console.log(code);

  res.json({
    verdict: "Accepted"
  });
});

module.exports = router;