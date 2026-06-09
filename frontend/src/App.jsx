import {
  Routes,
  Route
}
from "react-router-dom";

import Problems
from "./pages/Problems";

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

    </Routes>

  );

}

export default App;