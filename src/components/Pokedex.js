import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
    return (
        <div className="pokedex">
            {props.pokemonList.map(el => (
                <Pokemon releaseFn={props.releaseFn} saveFn={props.saveFn} name={el.name} img={el.img} key={el.id} id={el.id} />
            ))}
        </div>
    )
}

export default Pokedex