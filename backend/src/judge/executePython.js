const {
exec
}
=
require(
"child_process"
);

function executePython(
filepath,
input
){

return new Promise(
(resolve,reject)=>{

const dockerCommand =
`docker run --rm -i -v "${filepath}:/app/user.py" codeeval-python python /app/user.py`;

const process =
exec(

dockerCommand,

{
timeout:3000
},

(error,stdout,stderr)=>{

if(error){

if(
error.killed
){

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
"Runtime Error",

message:
stderr ||
error.message

});

return;

}

resolve(
stdout
);

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
executePython;