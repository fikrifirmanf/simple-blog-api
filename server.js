const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const apiRouter = require('./routers/index')

const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/api/v1/',apiRouter)
app.listen(PORT,()=>console.log(`Running on port ${PORT}`))

module.exports = app