const express =
require("express");

const authMiddleware =
require(
"../middleware/authMiddleware"
);
const fs =
require("fs");

const path =
require("path");

const router =
express.Router();

const executeCode =
require("../judge/executeCode");

const compareOutput =
require("../judge/compareOutput");

const {
  getProblemById
} =
require(
"../models/problemModel"
);

const {
  createSubmission
} =
require(
"../models/submissionModel"
);

router.post(
"/",
authMiddleware,
async (req,res)=>{

try{

const {
problemId,
code,
language
}
=
req.body;

const problem =
await getProblemById(
problemId
);

if(!problem){

return res
.status(404)
.json({

verdict:
"Problem Not Found"

});

}

const extensionMap = {

python:"py",

cpp:"cpp",

c:"c",

java:"java"

};

const filepath =
path.join(
__dirname,
`../../submissions/user.${extensionMap[language]}`
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
await executeCode(

language,

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

const submission =
await createSubmission({

user_id:
req.user.id,

problem_id:
problemId,

language:
"python",

code,

verdict:
passed === total
? "Accepted"
: "Wrong Answer",

passed,

total

});

res.json(
submission
);

}
catch(err){

const submission =
await createSubmission({

user_id:
req.user.id,

problem_id:
req.body.problemId,

language:
"python",

code:
req.body.code,

verdict:
err.type ||
"Runtime Error",

passed:
0,

total:
10

});

res.json({

...submission,

message:
err.message ||
String(err)

});

}

}
);

module.exports =
router;