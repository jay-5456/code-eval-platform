import { useState }
from "react";

import { useNavigate }
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

alert(
"Login Successful"
);

navigate("/");

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
padding:"20px"
}}
>

<h1>
Login
</h1>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)}
/>

<br />
<br />

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>
setPassword(
e.target.value
)}
/>

<br />
<br />

<button
onClick={login}
>

Login

</button>

</div>

);

}

export default Login;