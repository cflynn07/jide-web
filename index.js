const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World! 12'))
app.get('/healthz', (req, res) => res.send('ok'))
app.get('/test/foo/bar', (req, res) => res.send('ok test 7 ok'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
