const express =require("express");
const cors =require("cors");
const problemsRoute =require("./routes/problems");
const authRoute =
require("./routes/auth");
const submitRoute =require("./routes/submit");
const adminRoute =
require("./routes/admin");
const leaderboardRoute =
require("./routes/leaderboard");
const runRoute =require("./routes/run");
const app =express();
const submissionsRoute =
require(
"./routes/submissions"
);

app.use(cors());
app.use(express.json());
app.use(
"/auth",
authRoute
);
app.use(
"/leaderboard",
leaderboardRoute
);
app.use(
"/admin",
adminRoute
);
app.use(
"/problems",
problemsRoute
);
app.use(
"/run",
runRoute
);
app.use(
"/submit",
submitRoute
);

app.use(
"/submissions",
submissionsRoute
);
module.exports =app;