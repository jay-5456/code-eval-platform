const executePython =
require("./executePython");
const executeCpp =
require("./executeCpp");
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