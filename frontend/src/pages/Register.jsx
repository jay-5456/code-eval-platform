import { useState }
from "react";

import { Link }
from "react-router-dom";

import api
from "../services/api";

function Register(){

const [username,setUsername] =
useState("");

const [email,setEmail] =
useState("");

const [password,setPassword] =
useState("");

const register =
async () => {

try{

await api.post(
"/auth/register",
{
username,
email,
password
}
);

alert(
"Registration Successful"
);

window.location.href =
"/login";

}
catch(err){

alert(
"Registration Failed"
);

}

};

return(

<div
style={{
minHeight:"100vh",
backgroundColor:"#0f0f0f",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

<div
style={{
backgroundColor:"#171717",
padding:"40px",
borderRadius:"16px",
width:"400px",
border:"1px solid #2a2a2a",
boxShadow:
"0 0 20px rgba(0,0,0,0.3)"
}}
>

<h1
style={{
color:"#ffffff",
marginBottom:"30px",
textAlign:"center"
}}
>
CodeEval
</h1>

<h2
style={{
color:"#ffffff",
marginBottom:"20px",
textAlign:"center"
}}
>
Register
</h2>

<input
placeholder="Username"
value={username}
onChange={(e)=>
setUsername(
e.target.value
)}
style={{
width:"100%",
padding:"12px",
marginBottom:"15px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#111",
color:"#fff",
boxSizing:"border-box"
}}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)}
style={{
width:"100%",
padding:"12px",
marginBottom:"15px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#111",
color:"#fff",
boxSizing:"border-box"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>
setPassword(
e.target.value
)}
style={{
width:"100%",
padding:"12px",
marginBottom:"20px",
borderRadius:"8px",
border:"1px solid #333",
backgroundColor:"#111",
color:"#fff",
boxSizing:"border-box"
}}
/>

<button
onClick={register}
style={{
width:"100%",
padding:"12px",
backgroundColor:"#ffffff",
color:"#000000",
border:"none",
borderRadius:"8px",
fontWeight:"bold",
cursor:"pointer",
fontSize:"16px"
}}
>

Register

</button>

<p
style={{
marginTop:"20px",
textAlign:"center",
color:"#a1a1aa"
}}
>

Already have an account?

{" "}

<Link
to="/login"
style={{
color:"#ffffff"
}}
>

Login

</Link>

</p>

</div>

</div>

);

}

export default Register;