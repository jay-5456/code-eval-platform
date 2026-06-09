const express =
require("express");

const router =
express.Router();

const {
getAllSubmissions
}
=
require(
"../models/submissionModel"
);

router.get(
"/",
async (req,res)=>{

try{

const submissions =
await getAllSubmissions();

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