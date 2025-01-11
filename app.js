import express from 'express'
const app = express()
const port = 3000
import "dotenv/config"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/naacho', (req, res) => {
  res.send('<h1>Naach mari Bindni</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
