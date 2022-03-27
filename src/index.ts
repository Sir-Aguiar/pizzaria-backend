import express from 'express'
const app = express()
app.use(express.json())

app.get('/', (req,res) => {
  res.send("Tá aí")
})
app.listen(process.env.PORT || 3333)
