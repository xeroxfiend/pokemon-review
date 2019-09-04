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
                Pokemon
            </div>
        )
    }
}


export default Pokemon