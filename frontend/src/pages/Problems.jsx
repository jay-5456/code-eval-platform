import { useEffect, useState } from "react";
import api from "../services/api";

function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    api
      .get("/problems")
      .then((res) => {
        setProblems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Problems</h1>

      {problems.map((problem) => (
        <div
          key={problem.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px"
          }}
        >
          <h2>{problem.title}</h2>
          <p>Difficulty: {problem.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default Problems;