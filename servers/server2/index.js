const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('this is response from server 2'))
app.listen(3000, () => console.log('Server2 running,  horayayayayay!!!'))
