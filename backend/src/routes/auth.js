const express =
require("express");

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

const router =
express.Router();

const {
  createUser,
  getUserByEmail
}
=
require(
"../models/userModel"
);

router.post(
"/register",
async (req,res)=>{

try{

const {
username,
email,
password
}
=
req.body;

const existingUser =
await getUserByEmail(
email
);

if(existingUser){

return res
.status(400)
.json({

message:
"Email already exists"

});

}

const passwordHash =
await bcrypt.hash(
password,
10
);

const user =
await createUser(

username,

email,

passwordHash

);

res.status(201)
.json({

message:
"User registered",

user:{

id:user.id,

username:
user.username,

email:
user.email

}

});

}
catch(err){

console.error(err);

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