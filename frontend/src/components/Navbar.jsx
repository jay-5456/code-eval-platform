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

const linkStyle = {

color:"#ffffff",

textDecoration:"none",

padding:"10px 16px",

borderRadius:"10px",

fontWeight:"500"

};

const activeStyle = {

backgroundColor:"#ffffff",

color:"#000000"

};

return(

<div
style={{
backgroundColor:"#111111",
borderBottom:"1px solid #2a2a2a",
padding:"16px 32px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
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
...linkStyle,

...(location.pathname === "/"
? activeStyle
: {})
}}
>

Problems

</Link>

{
user && (

<Link
to="/submissions"
style={{
...linkStyle,

...(location.pathname ===
"/submissions"

? activeStyle
: {})
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
...linkStyle,

...(location.pathname ===
"/admin"

? activeStyle
: {})
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
style={linkStyle}
>

Login

</Link>

<Link
to="/register"
style={linkStyle}
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
backgroundColor:"#ef4444",
color:"#ffffff",
border:"none",
padding:"10px 18px",
borderRadius:"10px",
cursor:"pointer",
fontWeight:"600"
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