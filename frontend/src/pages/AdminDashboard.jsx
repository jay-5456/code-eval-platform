import {
useState,
useEffect
}
from "react";

import api
from "../services/api";

function AdminDashboard(){

const [title,setTitle] =
useState("");

const [description,setDescription] =
useState("");

const [difficulty,setDifficulty] =
useState("Easy");

const [problemId,setProblemId] =
useState("");

const [input,setInput] =
useState("");

const [output,setOutput] =
useState("");

const [isHidden,setIsHidden] =
useState(false);
const [problems,setProblems]
=
useState([]);
const [editingId,setEditingId]
=
useState(null);

const createProblem =
async () => {

try{

await api.post(
"/admin/problem",
{
title,
description,
difficulty
}
);

alert(
"Problem Created"
);
loadProblems();

}
catch(err){

alert(
"Failed"
);

}

};

const createTestCase =
async () => {

try{

await api.post(
"/admin/testcase",
{
problemId:
Number(problemId),

input,

output,

isHidden
}
);

alert(
"Test Case Added"
);

}
catch(err){

alert(
"Failed"
);

}

};
const loadProblems =
async () => {

const res =
await api.get(
"/problems"
);

setProblems(
res.data
);

};
const editProblem =
(problem) => {

setEditingId(
problem.id
);

setTitle(
problem.title
);

setDescription(
problem.description
);

setDifficulty(
problem.difficulty
);

};
const deleteProblem =
async (id) => {

try{

await api.delete(
`/admin/problem/${id}`
);

loadProblems();

}
catch(err){

alert(
"Delete Failed"
);

}

};
useEffect(
() => {

loadProblems();

},
[]
);

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
Admin Dashboard
</h1>

<hr />

<h2>
Create Problem
</h2>

<input
placeholder="Title"
value={title}
onChange={(e)=>
setTitle(
e.target.value
)}
style={{
width:"400px",
padding:"12px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#171717",
color:"#ffffff"
}}
/>

<br />
<br />

<textarea
placeholder=
"Description"
value={
description
}
onChange={(e)=>
setDescription(
e.target.value
)}
rows="5"
style={{
width:"500px",
padding:"12px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#171717",
color:"#ffffff"
}}
/>

<br />
<br />

<select
value={
difficulty
}
onChange={(e)=>
setDifficulty(
e.target.value
)}
style={{
padding:"12px",
borderRadius:"8px",
backgroundColor:"#171717",
color:"#ffffff",
border:"1px solid #333"
}}
>

<option>
Easy
</option>

<option>
Medium
</option>

<option>
Hard
</option>

</select>

<br />
<br />

<button
onClick={
async ()=>{

if(editingId){

await api.put(

`/admin/problem/${editingId}`,

{
title,
description,
difficulty
}

);

alert(
"Problem Updated"
);

setEditingId(
null
);

loadProblems();

}
else{

createProblem();

}

}
}
style={{
backgroundColor:"#ffffff",
color:"#000000",
border:"none",
padding:"12px 20px",
borderRadius:"8px",
fontWeight:"600",
cursor:"pointer"
}}
>

{
editingId
?
"Update Problem"
:
"Create Problem"
}

</button>

<hr />

<h2>
Add Test Case
</h2>

<input
placeholder=
"Problem ID"
value={
problemId
}
onChange={(e)=>
setProblemId(
e.target.value
)}
style={{
width:"400px",
padding:"12px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#171717",
color:"#ffffff"
}}
/>

<br />
<br />
<textarea
placeholder=
"Input"
value={input}
onChange={(e)=>
setInput(
e.target.value
)}
rows="4"
style={{
width:"500px",
padding:"12px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#171717",
color:"#ffffff"
}}
/>

<br />
<br />

<textarea
placeholder=
"Output"
value={output}
onChange={(e)=>
setOutput(
e.target.value
)}
rows="4"
style={{
width:"500px",
padding:"12px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#171717",
color:"#ffffff"
}}
/>

<br />
<br />

<label>

<input
type="checkbox"
checked={isHidden}
onChange={(e)=>
setIsHidden(
e.target.checked
)}
/>

Hidden Test Case

</label>

<br />
<br />

<button
onClick={
createTestCase
}
style={{
backgroundColor:"#ffffff",
color:"#000000",
border:"none",
padding:"12px 20px",
borderRadius:"8px",
fontWeight:"600",
cursor:"pointer"
}}
>

Add Test Case

</button>
<hr />

<h2>
Existing Problems
</h2>

{
problems.map(
(problem)=>(
<div
key={problem.id}
style={{
border:
"1px solid gray",
padding:"10px",
marginBottom:"10px"
}}
>

<strong>

{problem.id}
-
{problem.title}

</strong>

<br />

Difficulty:
{" "}
{problem.difficulty}

<br />
<br />

<button
onClick={()=>
editProblem(
problem
)
}
>

Edit

</button>

{" "}

<button
onClick={()=>
deleteProblem(
problem.id
)}
>

Delete

</button>

</div>
)
)
}

</div>

);

}

export default
AdminDashboard;