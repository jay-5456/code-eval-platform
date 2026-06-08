const pool =
require("./db");

async function test() {

  try {

    const result =
      await pool.query(
        "SELECT NOW()"
      );

    console.log(
      "Connected Successfully"
    );

    console.log(
      result.rows[0]
    );

  }
  catch (err) {

    console.error(
      err
    );

  }

}

test();