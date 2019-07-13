const express = require( 'express' )
const router = express.Router()
const request = require('request')
const mongoose = require('mongoose')
const CityModel = require( '../mongoose/models/city' )
const api = require( '../lib/Cityapi' )


router.get( '/city/:cityName', async ( req, res ) => {
    const city = req.params.cityName
    //console.log(city)
    let result = await api.dataWeather( city )
    
    const model = new CityModel( result )
    
    //console.log(model)
    res.json( result )
} )

router.get( '/cities' , function(req, res){
    CityModel.find({}, function(err, response){
        res.send(response)
    })
    
})

router.post('/city', function(req, res){
    const cityBody = req.body
    const city = new CityModel( cityBody )
    
    city.save( () => res.json({ success : true } ) )
})

router.delete('/city/:cityName', function( req, res )  {
    let city = req.params.cityName
    // console.log(city)
    //city = city[0].toUpperCase()  + city.slice(1)     
    CityModel.find({}, function (err, response) {
        let i = response.findIndex(x => x.name === city)
        if(i !== -1){
        response[i].remove()
        console.log("deleted from DB") 
        }
    })
    res.end()  
   })

    

module.exports = router