const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('this is response from server 1'))
app.listen(3000, () =>
  console.log(
    `Server1 running,  Finally, it works! Listening on port 3000 horayayayayay!!!`
  )
)
