const pokemonCaught = [
  {
    id: 1,
    name: "Dratini",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png"
  },
  {
    id: 2,
    name: "Rhydon",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png"
  },
  {
    id: 3,
    name: "Mew",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
];

let id = 4

module.exports = {
    catch: (req, res) => {
        const pokemonObj = {
            name: req.body.name,
            img: req.body.img,
            id: id++
        }
        pokemonCaught.push(pokemonObj)
        res.status(200).send(pokemonCaught)
    }
}