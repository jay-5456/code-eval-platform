const pool =
require("../db/db");

async function getAllProblems() {

  const result =
    await pool.query(`
      SELECT *
      FROM problems
      ORDER BY id
    `);

  return result.rows;
}

async function getProblemById(id) {

  const problemResult =
    await pool.query(
      `
      SELECT *
      FROM problems
      WHERE id = $1
      `,
      [id]
    );

  if (
    problemResult.rows.length === 0
  ) {
    return null;
  }

  const testcaseResult =
    await pool.query(
      `
      SELECT *
      FROM testcases
      WHERE problem_id = $1
      `,
      [id]
    );

  const problem =
    problemResult.rows[0];

  problem.sampleTestCases =
    testcaseResult.rows
      .filter(
        t => !t.is_hidden
      )
      .map(
        t => ({
          input: t.input,
          output: t.output
        })
      );

  problem.hiddenTestCases =
    testcaseResult.rows
      .filter(
        t => t.is_hidden
      )
      .map(
        t => ({
          input: t.input,
          output: t.output
        })
      );

  return problem;
}
async function createProblem(
title,
description,
difficulty
){

const result =
await pool.query(
`
INSERT INTO problems
(
title,
description,
difficulty
)
VALUES
(
$1,$2,$3
)
RETURNING *
`,
[
title,
description,
difficulty
]
);

return result.rows[0];

}
async function addTestCase(
problemId,
input,
output,
isHidden
){

const result =
await pool.query(
`
INSERT INTO testcases
(
problem_id,
input,
output,
is_hidden
)
VALUES
(
$1,$2,$3,$4
)
RETURNING *
`,
[
problemId,
input,
output,
isHidden
]
);

return result.rows[0];

}
module.exports = {

getAllProblems,

getProblemById,

createProblem,

addTestCase

};