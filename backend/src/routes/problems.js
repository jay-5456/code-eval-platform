const express =
require("express");

const router =
express.Router();

const {
  getAllProblems,
  getProblemById
} =
require(
"../models/problemModel"
);

router.get(
"/",
async (req,res)=>{

try{

const problems =
await getAllProblems();

res.json(
problems
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

router.get(
"/:id",
async (req,res)=>{

try{

const id =
Number(
req.params.id
);

const problem =
await getProblemById(
id
);

if(!problem){

return res
.status(404)
.json({

message:
"Problem not found"

});

}

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