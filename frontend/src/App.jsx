import { Routes, Route } from "react-router-dom";
import Submissions
from
"./pages/Submissions";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";

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
    </Routes>
  );
}

export default App;