import { useState }
from "react";

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
padding:"20px"
}}
>

<h1>
Register
</h1>

<input
placeholder="Username"
value={username}
onChange={(e)=>
setUsername(
e.target.value
)}
/>

<br />
<br />

<input
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
onClick={register}
>

Register

</button>

</div>

);

}

export default Register;