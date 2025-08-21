
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hola desde Server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
