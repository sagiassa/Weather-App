require('dotenv').config()

const express = require( 'express' )
const bodyParser = require('body-parser')
const app = express()
const path = require( 'path' )

const api = require('./routes/city')

const PORT = 4567
const mongoose = require('mongoose')

const router = require('./routes/city')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api)


mongoose.connect( "mongodb://localhost/Weather-App", { useNewUrlParser: true })
app.listen( PORT, function(err, res){
    console.group("the server runs on port " + PORT)
})
