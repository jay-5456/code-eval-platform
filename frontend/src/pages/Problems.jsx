import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";

function Problems() {

  const [problems, setProblems] =
    useState([]);

  useEffect(() => {

    api.get("/problems")
      .then((res) => {
        setProblems(res.data);
      });

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Problems</h1>
      <Link
to="/submissions"
>
View Submission History
</Link>

<br />
<br />
      {problems.map((problem) => (

        <Link
          key={problem.id}
          to={`/problem/${problem.id}`}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >

          <div
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h2>{problem.title}</h2>

            <p>
              Difficulty:
              {" "}
              {problem.difficulty}
            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}

export default Problems;