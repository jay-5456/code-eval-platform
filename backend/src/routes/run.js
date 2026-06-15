const express =
require("express");

const fs =
require("fs");

const path =
require("path");

const router =
express.Router();

const {
  getProblemById
} =
require(
"../models/problemModel"
);

const executePython =
require("../judge/executePython");

const compareOutput =
require("../judge/compareOutput");

router.post(
"/",
async (req,res)=>{

try{

const {
problemId,
code,
language
} = req.body;
console.log(
"Language:",
language
);
const problem =
await getProblemById(
problemId
);

if(!problem){

return res
.status(404)
.json({

message:
"Problem not found"

});

}

const filepath =
path.join(
__dirname,
"../../submissions/user.py"
);

fs.writeFileSync(
filepath,
code
);

const results = [];

for(
let i=0;
i<
problem.sampleTestCases.length;
i++
){

const testcase =
problem.sampleTestCases[i];

const output =
await executePython(
filepath,
testcase.input
);

const passed =
compareOutput(
output,
testcase.output
);

results.push({

testcase:
i + 1,

passed,

expected:
testcase.output,

received:
output.trim()

});

}

res.json({

status:
"success",

results

});

}
catch(err){

res.json({

status:
"error",

errorType:
err.type ||
"Runtime Error",

message:
err.message ||
String(err)

});

}

}
);

module.exports =
router;