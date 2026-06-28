const pool =
require("../db/db");

async function getLeaderboard(){

const result =
await pool.query(
`
SELECT

u.username,

COUNT(
DISTINCT
CASE
WHEN s.verdict='Accepted'
THEN s.problem_id
END
) AS solved,

COUNT(
s.id
) AS submissions,

COUNT(
DISTINCT
CASE
WHEN s.verdict='Accepted'
THEN s.problem_id
END
)*100 AS score

FROM users u

LEFT JOIN submissions s

ON
u.id = s.user_id

GROUP BY
u.id,
u.username

ORDER BY
score DESC,
submissions ASC;

`
);

return result.rows;

}

module.exports = {

getLeaderboard

};