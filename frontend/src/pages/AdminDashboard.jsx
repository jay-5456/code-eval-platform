import { useState }
from "react";

import api
from "../services/api";

function AdminDashboard(){

const [title,setTitle] =
useState("");

const [
description,
setDescription
]
=
useState("");

const [
difficulty,
setDifficulty
]
=
useState("Easy");

const createProblem =
async () => {

try{

const res =
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

console.log(
res.data
);

setTitle("");
setDescription("");

}
catch(err){

alert(
"Failed"
);

console.log(
err
);

}

};

return(

<div
style={{
padding:"20px"
}}
>

<h1>
Admin Dashboard
</h1>

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
width:"400px"
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
cols="60"
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
createProblem
}
>

Create Problem

</button>

</div>

);

}

export default
AdminDashboard;