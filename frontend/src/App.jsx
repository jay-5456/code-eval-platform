import {
  Routes,
  Route
}
from "react-router-dom";
import Navbar
from "./components/Navbar";
import Problems
from "./pages/Problems";
import AdminDashboard
from "./pages/AdminDashboard";
import ProblemDetails
from "./pages/ProblemDetails";

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
        element={<Problems />}
      />

      <Route
        path="/problem/:id"
        element={<ProblemDetails />}
      />

      <Route
        path="/submissions"
        element={
          <Submissions />
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
<AdminDashboard />
}
/>
    </Routes>

</>

);

}

export default App;