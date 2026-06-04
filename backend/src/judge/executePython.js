const { exec } =
require("child_process");

function executePython(
  filepath,
  input
) {

  return new Promise(
    (resolve, reject) => {

      const process =
      exec(
        `python "${filepath}"`
      );

      let output = "";
      let errorOutput = "";

      process.stdin.write(
        input
      );

      process.stdin.end();

      process.stdout.on(
        "data",
        (data) => {
          output += data;
        }
      );

      process.stderr.on(
        "data",
        (data) => {
          errorOutput += data;
        }
      );

      process.on(
        "close",
        () => {

          if (
            errorOutput.length > 0
          ) {
            reject(errorOutput);
            return;
          }

          resolve(output);

        }
      );

    }
  );

}

module.exports =
executePython;