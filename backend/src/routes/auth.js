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
router.post(
"/login",
async (req,res)=>{

try{

const {
email,
password
}
=
req.body;

const user =
await getUserByEmail(
email
);

if(!user){

return res
.status(400)
.json({

message:
"Invalid credentials"

});

}

const validPassword =
await bcrypt.compare(

password,

user.password_hash

);

if(!validPassword){

return res
.status(400)
.json({

message:
"Invalid credentials"

});

}

const token =
jwt.sign(

{
id:user.id,
email:user.email
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.json({

message:
"Login successful",

token,

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