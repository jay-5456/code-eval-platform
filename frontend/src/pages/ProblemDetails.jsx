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

  code,

  language
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

  code,

  language
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
  <div
    style={{
      backgroundColor:"#0f0f0f",
      minHeight:"100vh",
      padding:"30px",
      color:"#ffffff"
    }}
  >

      <h1
  style={{
    marginBottom:"10px"
  }}
>
  {problem.title}
</h1>

<div
  style={{
    display:"inline-block",
    padding:"8px 14px",
    backgroundColor:"#ffffff",
    color:"#000000",
    borderRadius:"20px",
    fontWeight:"600",
    marginBottom:"20px"
  }}
>
  {problem.difficulty}
</div>

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
  backgroundColor:"#171717",
  border:"1px solid #2a2a2a",
  borderRadius:"12px",
  padding:"15px",
  marginBottom:"15px"
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
style={{
padding:"10px",
borderRadius:"8px",
backgroundColor:"#171717",
color:"#ffffff",
border:"1px solid #2a2a2a"
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
style={{
backgroundColor:"#ffffff",
color:"#000000",
border:"none",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"600",
cursor:"pointer"
}}
>
Run
</button>

      <button
onClick={submitCode}
style={{
marginLeft:"10px",
backgroundColor:"#22c55e",
color:"#ffffff",
border:"none",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"600",
cursor:"pointer"
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
        key={result.testcase}
        style={{
backgroundColor:"#171717",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"15px",
marginBottom:"15px"
}}
      >

        <h4>

          Test Case
          {" "}
          {result.testcase}

          {" "}

          {
            result.passed
            ? "✅ Passed"
            : "❌ Failed"
          }

        </h4>

        {
          !result.passed && (

            <div>

              <p>

                <strong>
                  Expected:
                </strong>

                {" "}

                {
                  result.expected
                }

              </p>

              <p>

                <strong>
                  Received:
                </strong>

                {" "}

                {
                  result.received
                }

              </p>

            </div>

          )
        }

      </div>

    )
  )
}
<hr />

<h2>
Submission Result
</h2>

{
submitResult && (

<div
style={{
backgroundColor:"#171717",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"20px",
marginTop:"20px"
}}
>

<h2>

{
submitResult.verdict
=== "Accepted"

? "✅ Accepted"

: submitResult.verdict
=== "Wrong Answer"

? "❌ Wrong Answer"

: `⚠ ${submitResult.verdict}`
}

</h2>

{
submitResult.passed !==
undefined && (

<h3>

Passed

{" "}

{
submitResult.passed
}

/

{
submitResult.total
}

</h3>

)
}

{
submitResult.message && (

<pre>

{
submitResult.message
}

</pre>

)
}

</div>

)
}
    </div>
  );
}

export default ProblemDetails;