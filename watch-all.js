const spawn = require("child_process").spawn;
const path = require("path");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const spawner = (cmd, args, dirname, display = false) => {
  return new Promise((resolve, reject) => {
    const childSpawn = spawn(cmd, args, {
      stdio: display ? "inherit" : "ignore",
      cwd: dirname,
    });
    childSpawn.on("exit", function (code) {
      resolve(code);
    });
  });
};

async function start1() {
  const mainPath = path.resolve(process.cwd());
  const err = await spawner(npm, ["run", "watch:client"], mainPath, true);
  console.error(err);
}

async function start2() {
  const mainPath = path.resolve(process.cwd());
  const err = await spawner(npm, ["run", "ts:watch:server"], mainPath, true);
  console.error(err);
}

async function start3() {
  const mainPath = path.resolve(process.cwd());
  const err = await spawner(npm, ["run", "watch:server"], mainPath, true);
  console.error(err);
}

start1();

start2();

setTimeout(() => {
  start3();
}, 2000);

