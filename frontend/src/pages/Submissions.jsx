import {
useEffect,
useState
}
from "react";

import api
from "../services/api";

function Submissions(){

const [
submissions,
setSubmissions
] = useState([]);

useEffect(()=>{

api
.get(
"/submissions"
)
.then((res)=>{

setSubmissions(
res.data
);

});

},[]);

return(

<div
style={{
backgroundColor:"#0f0f0f",
minHeight:"100vh",
padding:"30px",
color:"#ffffff"
}}
>

<h1
style={{
marginBottom:"30px"
}}
>
Submission History
</h1>

{
submissions.length === 0 && (

<div
style={{
backgroundColor:"#171717",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"20px"
}}
>

No submissions found.

</div>

)
}

{
submissions
.slice()
.reverse()
.map(
(submission)=>(

<div
key={
submission.id
}
style={{
backgroundColor:"#171717",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"20px",
marginBottom:"15px"
}}
>

<h3
style={{
color:
submission.verdict ===
"Accepted"

? "#22c55e"

: "#ef4444",

marginBottom:"15px"
}}
>

{
submission.verdict
}

</h3>

<p
style={{
color:"#d4d4d8"
}}
>

Problem ID:
{" "}

{
submission.problemId
}

</p>

<p
style={{
color:"#d4d4d8"
}}
>

Language:
{" "}

{
submission.language
}

</p>

{
submission.passed !==
undefined && (

<p
style={{
color:"#d4d4d8"
}}
>

Passed

{" "}

{
submission.passed
}

/

{
submission.total
}

</p>

)
}

<p
style={{
color:"#a1a1aa",
marginTop:"10px"
}}
>

{
new Date(
submission
.submittedAt
)
.toLocaleString()
}

</p>

</div>

)
)
}

</div>

);

}

export default
Submissions;