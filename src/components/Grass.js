import React, {Component} from "react";

class Grass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grassClicked: false,
      clicksToCatch: Math.ceil(Math.random() * 10)
    };
  }

  checkGrass() {
    if (!this.state.grassClicked) {
      console.log(`A wild ${this.props.pokemonData.name} appeared!`);
      this.setState({grassClicked: true});
    } else {
      this.catchPokemon();
      console.log(`caught ${this.props.pokemonData.name}!`);
    }
  }

  catchPokemon() {
    this.props.catchFn({
        name: this.props.pokemonData.name,
        img: this.props.pokemonData.sprites.front_default
    });
  }

  render() {
    const {pokemonData} = this.props;
    const grass =
      "https://studio.code.org/media?u=http%3A%2F%2Fi.imgur.com%2FyaxYGuT.png";
    return (
      <div className="grass">
        {/* <h3>{this.props.pokemonData.name}</h3> */}
        <img
          onClick={() => this.checkGrass()}
          src={
            this.state.grassClicked ? pokemonData.sprites.front_default : grass
          }
          alt={pokemonData.name}
        />
      </div>
    );
  }
}

export default Grass;
