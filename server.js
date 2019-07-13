require('dotenv').config()

const express = require( 'express' )
const bodyParser = require('body-parser')
const app = express()
const path = require( 'path' )

const api = require('./routes/city')

const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

const router = require('./routes/city')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Weather-App", { useNewUrlParser: true })
app.listen(process.env.PORT || PORT)
