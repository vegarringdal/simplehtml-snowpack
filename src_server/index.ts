// just need a quick way to run production build
const express = require("express");
const app = express();
const port = 80;
const compression = require("compression");
const { constants } = require("zlib");

const ENVIORNMENT =
  process.argv.indexOf("--production") !== -1 ? "production" : "development";

app.use(
  compression({
    threshold: 1,
    flush: constants.Z_SYNC_FLUSH,
  })
);

app.use(function (r: any, _q: any, next: any) {
  console.log("s", r.path);
  next();
});

app.use(
  express.static(
    `build_${ENVIORNMENT === "production" ? "prod" : "dev"}_client`
  )
);

app.listen(port, () => {
  console.log(`App{${ENVIORNMENT}} listening at http://localhost:${port}`);
});
