import { useState }
from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import api
from "../services/api";

function Login() {

const navigate =
useNavigate();

const [email,setEmail] =
useState("");

const [password,setPassword] =
useState("");

const login =
async () => {

try{

const res =
await api.post(
"/auth/login",
{
email,
password
}
);

localStorage.setItem(
"token",
res.data.token
);

localStorage.setItem(
"user",
JSON.stringify(
res.data.user
)
);

window.location.href =
"/";

}
catch(err){

alert(
"Login Failed"
);

}

};

return (

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
Login
</h2>

<input
type="email"
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
onClick={login}
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

Login

</button>

<p
style={{
marginTop:"20px",
textAlign:"center",
color:"#a1a1aa"
}}
>

Don't have an account?

{" "}

<Link
to="/register"
style={{
color:"#ffffff"
}}
>

Register

</Link>

</p>

</div>

</div>

);

}

export default Login;