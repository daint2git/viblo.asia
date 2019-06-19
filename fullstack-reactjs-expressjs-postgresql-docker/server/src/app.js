const express = require('express')
const cors = require('cors')

const productRouter = require('./productRouter')

const app = express()

app.use(
  cors({
    credentials: true,
    origin: `http://localhost:6969`,
  }),
)

app.use('/api/products', productRouter)

app.get('/', (req, res) => res.send('DaiNT2 - Hello server!'))

app.listen(9696, () => console.log(`Server listening on port 9696`))
