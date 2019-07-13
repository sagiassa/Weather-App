require('dotenv').config()

const express = require( 'express' )
const bodyParser = require('body-parser')
const app = express()
const path = require( 'path' )

const api = require('./routes/city')

const PORT = process.env.PORT
const mongoose = require('mongoose')

const router = require('./routes/city')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


mongoose.connect("mongodb://localhost/Weather-App", { useNewUrlParser: true })
app.listen(PORT, function(){
    console.log("server rnning on " + PORT)
})