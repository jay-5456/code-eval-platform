const pool =
require("../db/db");

async function createUser(
username,
email,
passwordHash
){
const result =
await pool.query(
`
INSERT INTO users
(
username,
email,
password_hash,
role
)
VALUES
(
$1,$2,$3,'user'
)
RETURNING *
`,
[
username,
email,
passwordHash
]
);

return result.rows[0];

}

async function getUserByEmail(
email
){

const result =
await pool.query(
`
SELECT *
FROM users
WHERE email = $1
`,
[email]
);

return result.rows[0];

}

module.exports = {
createUser,
getUserByEmail
};