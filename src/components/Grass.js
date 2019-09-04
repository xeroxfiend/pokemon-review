import React, {Component} from 'react'

class Grass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemonImg: '',
            grassClicked: false,
            clicksToCatch: Math.ceil(Math.random() * 10)
        }
    }

    render() {
        return (
            <div className="grass">
                Grass
            </div>
        )
    }
}






export default Grass