const express =
require("express");

const router =
express.Router();

const submissions =
require("../data/submissions");

router.get(
"/",
(req,res)=>{

res.json(
submissions
);

}
);

module.exports =
router;