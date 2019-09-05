import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component {
    state = {
        wildPokemonArr: []
    }

    componentDidMount() {
        axios.get('/api/wild-pokemon').then(res => this.setState({
            wildPokemonArr: res.data
        }))

    }
    render() {
        return (
            <div className="finder">
                {this.state.wildPokemonArr.map(el => <Grass catchFn={this.props.catchFn}pokemonData={el} key={el.name}/>)}
            </div>
        )
    }
}



export default Finder