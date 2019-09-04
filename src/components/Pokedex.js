import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
    return (
        <div className="pokedex">
            {props.pokemonList.map(el => (
                <Pokemon name={el.name} img={el.img} key={el.id} />
            ))}
        </div>
    )
}

export default Pokedex