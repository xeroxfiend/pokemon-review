import React, {Component} from "react";
import "./App.css";
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonCaught: []
    };
    this.catchPokemon = this.catchPokemon.bind(this);
  }
  catchPokemon(body) {
    axios.post('/api/pokemon', body).then(res => {
      this.setState({pokemonCaught: res.data})
    })
  }

  render() {
    return <div className="App">
      <Header />
      <Finder catchFn={this.catchPokemon} />
      <Pokedex pokemonList={this.state.pokemonCaught} />
    </div>
  }
}

export default App;
