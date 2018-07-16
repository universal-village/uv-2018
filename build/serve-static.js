let express = require('express');
let cors = require('cors')

let app = express();

app.use(cors())
app.use('/uv2018', express.static('dist'))

app.listen(3000)
