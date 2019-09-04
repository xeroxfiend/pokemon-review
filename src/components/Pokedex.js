import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
    return (
        <div className="pokedex">
            {props.pokemonList.map(el => (
                <Pokemon key={el.id} />
            ))}
        </div>
    )
}

export default Pokedex