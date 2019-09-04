require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const grassCtrl = require('./controllers/grassCtrl')
const pokeCtrl = require('./controllers/pokemonCtrl')


app.use(express.json())

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)

app.post('/api/pokemon', pokeCtrl.catch)

app.put('/api/pokemon/:id', pokeCtrl.rename)




app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})