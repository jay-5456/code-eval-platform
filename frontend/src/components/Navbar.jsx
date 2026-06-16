import {
Link,
useLocation
}
from "react-router-dom";

import {
getUser,
logout
}
from "../services/auth";

function Navbar(){

const user =
getUser();

const location =
useLocation();

const handleLogout =
() => {

logout();

window.location.href =
"/login";

};

if(

location.pathname ===
"/login"

||

location.pathname ===
"/register"

){

return null;

}

return(

<div
style={{
backgroundColor:"#111111",
borderBottom:
"1px solid #2a2a2a",
padding:"16px 32px",
display:"flex",
justifyContent:
"space-between",
alignItems:
"center"
}}
>

<div
style={{
fontSize:"24px",
fontWeight:"bold"
}}
>

<Link
to="/"
style={{
textDecoration:"none",
color:"#ffffff"
}}
>

CodeEval

</Link>

</div>

<div
style={{
display:"flex",
alignItems:"center",
gap:"20px"
}}
>

<Link
to="/"
style={{
color:"#ffffff",
textDecoration:"none"
}}
>
Problems
</Link>

{
user && (

<Link
to="/submissions"
style={{
color:"#ffffff",
textDecoration:"none"
}}
>
Submissions
</Link>

)
}

{
user &&
user.role ===
"admin" && (

<Link
to="/admin"
style={{
color:"#ffffff",
textDecoration:"none"
}}
>
Admin
</Link>

)
}

{
!user && (

<>
<Link
to="/login"
style={{
color:"#ffffff",
textDecoration:"none"
}}
>
Login
</Link>

<Link
to="/register"
style={{
color:"#ffffff",
textDecoration:"none"
}}
>
Register
</Link>
</>

)
}

{
user && (

<button
onClick={
handleLogout
}
style={{
backgroundColor:
"#ffffff",
color:"#000000",
border:"none",
padding:
"8px 16px",
borderRadius:
"8px",
cursor:"pointer",
fontWeight:
"600"
}}
>

Logout

</button>

)
}

</div>

</div>

);

}

export default Navbar;