require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const grassCtrl = require('./controllers/grassCtrl')


app.use(express.json())

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)




app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})