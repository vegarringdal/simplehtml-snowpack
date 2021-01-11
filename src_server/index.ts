const express = require("express");
const compression = require("compression");
const { constants } = require("zlib");

const ENVIORNMENT =
  process.argv.indexOf("--production") !== -1 ? "production" : "development";
const STATIC_FOLDER = `build_${
  ENVIORNMENT === "production" ? "prod" : "dev"
}_client`;


const app = express();
const port = 80;

app.use(
  compression({
    threshold: 1,
    flush: constants.Z_SYNC_FLUSH,
  })
);

app.use(function (r: any, _q: any, next: any) {
  console.log("requested path", r.path);
  next();
});

app.use(express.static(STATIC_FOLDER));


app.listen(port, () => {
  console.log(`App{${ENVIORNMENT}} listening at http://localhost:${port}`);
});
