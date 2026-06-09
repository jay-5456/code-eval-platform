const express =
require("express");

const router =
express.Router();

const authMiddleware =
require(
"../middleware/authMiddleware"
);

const {
getUserSubmissions
}
=
require(
"../models/submissionModel"
);

router.get(
"/",
authMiddleware,
async (req,res)=>{

try{

const submissions =
await getUserSubmissions(
req.user.id
);

res.json(
submissions
);

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