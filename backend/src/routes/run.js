const express =require("express");
const fs =require("fs");
const path =require("path");
const router =express.Router();
const problems =require("../data/problems");
const executePython =require("../judge/executePython");
const compareOutput =require("../judge/compareOutput");
router.post(
"/",
async (req,res)=>{
try{
const {problemId,code} = req.body;
const problem =
problems.find(
  p => p.id === problemId
);

if(!problem){
return res.status(404)
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

const passed =compareOutput(output,testcase.output);
results.push({

testcase:
i+1,

passed,

expected:
testcase.output,

received:
output.trim()

});

}
res.json({
status:"success",
results
});
}
catch(err){

res.json({

status:"error",

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

module.exports =router;