import express from 'express'

const app = express()
const port = 8000
app.get('/', (req, res) => res.send('HELLO TYPESCRIPT'))
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})