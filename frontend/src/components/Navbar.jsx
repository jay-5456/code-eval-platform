import { Link }
from "react-router-dom";

import {
getUser,
logout
}
from "../services/auth";

function Navbar(){

const user =
getUser();

const handleLogout =
() => {

logout();

window.location.href =
"/";

};

return(

<div
style={{
padding:"15px",
borderBottom:
"1px solid gray",
marginBottom:"20px",
display:"flex",
gap:"20px"
}}
>

<Link to="/">
Problems
</Link>

{
!user && (

<>
<Link
to="/login"
>
Login
</Link>

<Link
to="/register"
>
Register
</Link>
</>

)
}

{
user && (

<>
<Link
to="/submissions"
>
My Submissions
</Link>

{
user.role ===
"admin" && (

<Link
to="/admin"
>
Admin Dashboard
</Link>

)
}

<button
onClick={
handleLogout
}
>

Logout

</button>

</>

)
}

</div>

);

}

export default Navbar;