const express =require("express");
const cors =require("cors");
const problemsRoute =require("./routes/problems");
const submitRoute =require("./routes/submit");
const runRoute =require("./routes/run");
const app =express();

app.use(cors());
app.use(express.json());
app.use(
"/problems",
problemsRoute
);

app.use(
"/submit",
submitRoute
);
app.use(
"/run",
runRoute
);

module.exports =app;