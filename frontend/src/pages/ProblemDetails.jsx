import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

import CodeEditor from "../components/CodeEditor";
import templates from "../templates";

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

const [submitResult,
setSubmitResult] =
useState(null);

  const [runResult, setRunResult] =
    useState([]);
  const [runError,
setRunError] =
useState(null);
  useEffect(() => {

    api
      .get(`/problems/${id}`)
      .then((res) => {

        setProblem(res.data);

      })
      .catch((err) => {

        console.error(err);

      });

  }, [id]);

  const runCode = async () => {

    try {

      const res =
        await api.post(
          "/run",
          {
            problemId:
              problem.id,
            code
          }
        );

      if(
res.data.status ===
"error"
){

setRunError(
res.data
);

setRunResult([]);

return;

}

setRunError(null);

setRunResult(
res.data.results || []
);

    }
    catch (err) {

      console.error(err);

      alert(
        "Error while running code"
      );

    }

  };
  const submitCode =
async () => {

  try {

    const res =
      await api.post(
        "/submit",
        {
          problemId:
            problem.id,

          code
        }
      );

    setSubmitResult(
      res.data
    );

  }
  catch(err){

    console.error(err);

  }

};

  if (!problem) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>
        {problem.title}
      </h1>

      <h3>
        Difficulty:{" "}
        {problem.difficulty}
      </h3>

      <p>
        {problem.description}
      </p>

      <h3>
        Sample Test Cases
      </h3>

      {problem.sampleTestCases.map(
        (testcase, index) => (

          <div
            key={index}
            style={{
              border:
                "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <strong>
              Input:
            </strong>

            <pre>
              {testcase.input}
            </pre>

            <strong>
              Output:
            </strong>

            <pre>
              {testcase.output}
            </pre>

          </div>

        )
      )}

      <hr />

      <h2>
        Code Editor
      </h2>

      <select
        value={language}
        onChange={(e) => {

          setLanguage(
            e.target.value
          );

          setCode(
            templates[
              e.target.value
            ]
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

      <br />
      <br />

      <CodeEditor
        language={language}
        code={code}
        setCode={setCode}
      />

      <br />

      <button
        onClick={runCode}
      >
        Run
      </button>

      <button
onClick={submitCode}
style={{
marginLeft:"10px"
}}
>

Submit

</button>

      <h2>
        Verdict: {verdict}
      </h2>
{
runError && (

<div
style={{
color:"red",
marginBottom:"20px"
}}
>

<h3>
{
runError.errorType
}
</h3>

<pre>
{
runError.message
}
</pre>

</div>

)
}
      <h2>
        Run Results
      </h2>

      {
        runResult.map(
          (result) => (

            <div
              key={
                result.testcase
              }
              style={{
                marginBottom:
                  "10px"
              }}
            >

              Test Case{" "}
              {result.testcase}
              :
              {" "}

              {
                result.passed
                ? "✅ Passed"
                : "❌ Failed"
              }

            </div>

          )
        )
      }

    </div>
  );
}

export default ProblemDetails;