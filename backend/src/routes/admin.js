const express =
require("express");

const router =
express.Router();

const authMiddleware =
require(
"../middleware/authMiddleware"
);

const adminMiddleware =
require(
"../middleware/adminMiddleware"
);

const {
createProblem
}
=
require(
"../models/problemModel"
);

router.post(
"/problem",
authMiddleware,
adminMiddleware,
async (req,res)=>{

try{

const {
title,
description,
difficulty
}
=
req.body;

const problem =
await createProblem(

title,

description,

difficulty

);

res.json(
problem
);

}
catch(err){

console.error(
err
);

res.status(500)
.json({

message:
"Server Error"

});

}

}
);

module.exports =
router;