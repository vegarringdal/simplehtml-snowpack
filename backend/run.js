
// just need a quick way to run production build
const express = require('express')
const app = express()
const port = 80
const compression = require('compression');
const {constants} = require('zlib');

app.use(
  compression({
      threshold: 1,
      flush: constants.Z_SYNC_FLUSH
  })
);

app.use(function(r, q, next){
  console.log(r.path)
  next();
})

app.use(express.static('build'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})