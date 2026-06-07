const express =
require("express");

const fs =
require("fs");

const path =
require("path");

const router =
express.Router();

const problems =
require("../data/problems");

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
code
} = req.body;

const problem =
problems.find(
p => p.id === problemId
);

if(!problem){

return res
.status(404)
.json({

verdict:
"Problem Not Found"

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

let passed = 0;

const total =
problem
.hiddenTestCases
.length;

for(
let i=0;
i<total;
i++
){

const testcase =
problem
.hiddenTestCases[i];

const output =
await executePython(
filepath,
testcase.input
);

const result =
compareOutput(
output,
testcase.output
);

if(result){
passed++;
}

}

res.json({

verdict:
passed === total
? "Accepted"
: "Wrong Answer",

passed,

total

});

}
catch(err){

res.json({

verdict:
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