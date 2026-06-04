const express = require("express");
const router = express.Router();

const problems = require("../data/problems");

router.get("/", (req, res) => {
  res.json(problems);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const problem = problems.find(
    p => p.id === id
  );

  if (!problem) {
    return res.status(404).json({
      message: "Problem not found"
    });
  }

  res.json(problem);
});

module.exports = router;