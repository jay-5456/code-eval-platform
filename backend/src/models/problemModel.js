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

module.exports = {
  getAllProblems,
  getProblemById
};