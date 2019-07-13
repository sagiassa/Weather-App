const express = require('express')

const moment = require('moment')
const mongoose = require('mongoose')
const City = require('../mongoose/models/city')
const Schema = mongoose.Schema
require('dotenv').config()
const request = require( 'request-promise' )
const API_KEY = process.env.API_KEY

class WeatherApi {
    async dataWeather( city ) {
        let response = await request.get( `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}` )

        response = JSON.parse( response )

        const newCity = {
            name : response.location.name,
            updatedAt : moment().format(response.current.last_updated),
            temperature : response.current.temp_c,
            condition : response.current.condition.text,
            conditionPic : response.current.condition.icon
            
        }
        return newCity
    }
    
}

module.exports = new WeatherApi()