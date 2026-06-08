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
padding:"20px"
}}
>

<h1>
Submission History
</h1>

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
border:
"1px solid gray",
padding:"10px",
marginBottom:"10px"
}}
>

<h3>
{
submission.verdict
}
</h3>

<p>
Problem:
{
submission.problemId
}
</p>

<p>
Language:
{
submission.language
}
</p>

{
submission.passed !==
undefined && (

<p>

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

<p>

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