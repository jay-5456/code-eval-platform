const pool =
require("../db/db");

async function createSubmission(
submission
){

const result =
await pool.query(
`
INSERT INTO submissions
(
user_id,
problem_id,
language,
code,
verdict,
passed,
total
)
VALUES
(
$1,$2,$3,$4,$5,$6,$7
)
RETURNING *
`,
[
submission.user_id,
submission.problem_id,
submission.language,
submission.code,
submission.verdict,
submission.passed,
submission.total
]
);

return result.rows[0];

}

async function
getUserSubmissions(
userId
){

const result =
await pool.query(
`
SELECT *
FROM submissions
WHERE user_id = $1
ORDER BY submitted_at DESC
`,
[userId]
);

return result.rows;

}

module.exports = {
createSubmission,
getUserSubmissions
};