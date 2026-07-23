import {
useEffect,
useState
}
from "react";

import api
from "../services/api";

function Leaderboard(){

const [
leaders,
setLeaders
] =
useState([]);

useEffect(()=>{

api
.get("/leaderboard")
.then((res)=>{

setLeaders(
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

<h1>

Leaderboard

</h1>

<table
style={{
width:"100%",
borderCollapse:"collapse",
marginTop:"30px"
}}
>

<thead>

<tr
style={{
backgroundColor:"#171717"
}}
>

<th
style={{
padding:"15px"
}}
>

Rank

</th>

<th>

User

</th>

<th>

Solved

</th>

<th>

Submissions

</th>

<th>

Score

</th>

</tr>

</thead>

<tbody>

{
leaders.map(
(user,index)=>(

<tr
key={user.username}
style={{
textAlign:"center",
borderBottom:
"1px solid #2a2a2a"
}}
>

<td
style={{
padding:"15px"
}}
>

{

index===0

? "🥇"

: index===1

? "🥈"

: index===2

? "🥉"

: index+1

}

</td>

<td>

{user.username}

</td>

<td>

{user.solved}

</td>

<td>

{user.submissions}

</td>

<td>

{user.score}

</td>

</tr>

)
)
}

</tbody>

</table>

</div>

);

}

export default Leaderboard;