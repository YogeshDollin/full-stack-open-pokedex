const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/healthz', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if(true) throw('error...')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
