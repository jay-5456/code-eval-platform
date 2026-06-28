const express =
require("express");

const router =
express.Router();

const {
getLeaderboard
}
=
require(
"../models/leaderboardModel"
);

router.get(
"/",
async (req,res)=>{

try{

const leaderboard =
await getLeaderboard();

res.json(
leaderboard
);

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