let express = require('express');
let proxy = require('express-http-proxy');
let cors = require('cors')

let app = express();

app.use(cors())
app.use('/', proxy('127.0.0.1:8080'))

app.listen(3000)
