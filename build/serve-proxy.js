let express = require('express');
let proxy = require('express-http-proxy');
let cors = require('cors')

let app = express();

app.use(cors())
app.use('/', proxy('https://api-beta.universal-village.org', {
  proxyReqPathResolver: (req) => {
    return require('url').parse(req.url).path;
  }
}))

app.listen(3000)
