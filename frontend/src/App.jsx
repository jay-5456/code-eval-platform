import {
Routes,
Route,
Navigate
}
from "react-router-dom";
import Navbar
from "./components/Navbar";
import ProtectedRoute
from "./components/ProtectedRoute";
import Problems
from "./pages/Problems";
import Footer
from "./components/Footer";
import AdminDashboard
from "./pages/AdminDashboard";
import ProblemDetails
from "./pages/ProblemDetails";
import Leaderboard
from "./pages/Leaderboard";
import Submissions
from "./pages/Submissions";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

function App() {

  return (

<>
  <Navbar />

  <Routes>

      <Route
path="/"
element={
localStorage.getItem(
"token"
)
?
<ProtectedRoute>
<Problems />
</ProtectedRoute>
:
<Navigate
to="/login"
/>
}
/>

      <Route
path="/problem/:id"
element={
<ProtectedRoute>
<ProblemDetails />
</ProtectedRoute>
}
/>

     <Route
path="/submissions"
element={
<ProtectedRoute>
<Submissions />
</ProtectedRoute>
}
/>
<Route
path="/leaderboard"
element={
<ProtectedRoute>
<Leaderboard />
</ProtectedRoute>
}
/>

      <Route
        path="/login"
        element={
          <Login />
        }
      />

      <Route
        path="/register"
        element={
          <Register />
        }
      />
<Route
path="/admin"
element={
<ProtectedRoute>
<AdminDashboard />
</ProtectedRoute>
}
/>
    </Routes>
    <Footer />

</>

);

}

export default App;