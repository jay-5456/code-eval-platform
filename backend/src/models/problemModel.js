const pool =
require("../db/db");

async function
getAllProblems(){

const result =
await pool.query(
`
SELECT *
FROM problems
ORDER BY id
`
);

return result.rows;

}

module.exports = {
getAllProblems
};