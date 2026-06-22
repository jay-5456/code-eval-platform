const {
exec
}
=
require(
"child_process"
);

function executeC(
filepath,
input
){

return new Promise(
(resolve,reject)=>{

const dockerCommand =
`docker run --rm -i --network none --memory=128m --cpus=0.5 -v "${filepath}:/app/user.c" codeeval-c sh -c "gcc /app/user.c -o /app/main && /app/main"`;
const process =
exec(

dockerCommand,

{
timeout:3000
},

(error,stdout,stderr)=>{

if(error){

if(error.killed){

reject({

type:
"Time Limit Exceeded",

message:
"Execution exceeded 3 seconds"

});

return;

}

reject({

type:
"Compilation Error",

message:
stderr ||
error.message

});

return;

}

resolve(stdout);

}

);

process.stdin.write(
input
);

process.stdin.end();

}
);

}

module.exports =
executeC;