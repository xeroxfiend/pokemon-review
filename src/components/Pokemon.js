import React, {Component} from 'react'

class Pokemon extends Component {
    constructor() {
        super()
        this.state = {
            toggleRename: false,
            renameInput: ''
        }
    }

    render() {
        return (
            <div className="pokemon">
                <h4>{this.props.name}</h4>
                <img src={this.props.img} alt={this.props.name}/>
            </div>
        )
    }
}


export default Pokemon