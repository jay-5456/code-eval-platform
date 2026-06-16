const executePython =
require("./executePython");
const executeCpp =
require("./executeCpp");
const executeC =
require("./executeC");  
const executeJava =
require("./executeJava");
async function executeCode(
language,
filepath,
input
){
switch(language){

case "python":

return await executePython(
filepath,
input
);

case "cpp":

return await executeCpp(
filepath,
input
);
case "c":

return await executeC(
filepath,
input
);
case "java":

return await executeJava(
filepath,
input
);

default:

throw {

type:
"Language Error",

message:
`${language} not supported yet`

};

}

}

module.exports =
executeCode;