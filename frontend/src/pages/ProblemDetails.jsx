import { useEffect, useState } from "react";


import CodeEditor
  from "../components/CodeEditor";

import templates
  from "../templates";

import { useParams } from "react-router-dom";

import api from "../services/api";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] =
  useState(null);

const [language, setLanguage] =
  useState("python");

const [code, setCode] =
  useState(
    templates.python
  );

const [verdict, setVerdict] =
  useState("");

  useEffect(() => {

    api
      .get(`/problems/${id}`)
      .then((res) => {

        setProblem(res.data);

      });

  }, [id]);

  if (!problem) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>{problem.title}</h1>

      <h3>
        Difficulty:
        {" "}
        {problem.difficulty}
      </h3>

      <p>
        {problem.description}
      </p>

      <h3>Sample Test Cases</h3>

{problem.sampleTestCases.map(
        (testcase, index) => (

          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <strong>Input:</strong>

            <pre>
              {testcase.input}
            </pre>

            <strong>Output:</strong>

            <pre>
              {testcase.output}
            </pre>

          </div>

        )
      )}
<h2>Code Editor</h2>

<select
  value={language}
  onChange={(e) => {

    setLanguage(
      e.target.value
    );

    setCode(
      templates[e.target.value]
    );

  }}
>

  <option value="python">
    Python
  </option>

  <option value="cpp">
    C++
  </option>

  <option value="java">
    Java
  </option>

  <option value="c">
    C
  </option>

</select>

<CodeEditor
  language={language}
  code={code}
  setCode={setCode}
/>

<br />

<button>

  Run

</button>

<button
  style={{
    marginLeft: "10px"
  }}
>

  Submit

</button>

<h2>
  Verdict:
  {" "}
  {verdict}
</h2>
    </div>
  );
}

export default ProblemDetails;