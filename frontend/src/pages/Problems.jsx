import { useEffect, useState }
from "react";

import { Link }
from "react-router-dom";

import api
from "../services/api";

function Problems() {

const [problems,setProblems] =
useState([]);

useEffect(() => {

api.get("/problems")
.then((res) => {

setProblems(
res.data
);

});

}, []);

return (

<div
style={{
backgroundColor:"#0f0f0f",
minHeight:"100vh",
padding:"30px"
}}
>

<h1
style={{
color:"#ffffff",
marginBottom:"30px"
}}
>

Problem Set

</h1>

<Link
to="/submissions"
style={{
display:"inline-block",
marginBottom:"30px",
padding:"10px 16px",
backgroundColor:"#ffffff",
color:"#000000",
textDecoration:"none",
borderRadius:"8px",
fontWeight:"600"
}}
>

View Submission History

</Link>

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fill,minmax(320px,1fr))",
gap:"20px"
}}
>

{
problems.map(
(problem) => (

<Link
key={problem.id}
to={`/problem/${problem.id}`}
style={{
textDecoration:"none"
}}
>

<div
style={{
backgroundColor:"#171717",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"20px",
height:"100%",
transition:"0.2s"
}}
>

<h2
style={{
color:"#ffffff",
marginBottom:"15px"
}}
>

{problem.title}

</h2>

<p
style={{
color:"#a1a1aa",
marginBottom:"10px"
}}
>

Problem ID:
{" "}
{problem.id}

</p>

<div
style={{
display:"inline-block",
padding:"6px 12px",
borderRadius:"20px",
backgroundColor:"#ffffff",
color:"#000000",
fontWeight:"600",
fontSize:"14px"
}}
>

{problem.difficulty}

</div>

</div>

</Link>

)
)
}

</div>

</div>

);

}

export default Problems;