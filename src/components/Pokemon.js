import React, {Component} from "react";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      toggleRename: false,
      renameInput: ""
    };
  }

  toggle() {
    this.setState(prevState => ({toggleRename:!prevState.toggleRename}));
  }

  handleChange(e) {
      this.setState({renameInput: e.target.value})
  }

  save() {
    this.props.saveFn(this.props.id, {newName: this.state.renameInput || this.props.name})
    this.toggle()
  }

  render() {
    return (
      <div className="pokemon">
        {this.state.toggleRename ? (
          <div className="editor">
            <input placeholder={this.props.name} onChange={e => this.handleChange(e)}/>
            <button onClick={() => this.save()}>Save</button>
            <button onClick={() => this.toggle()}>Cancel</button>
          </div>
        ) : (
          <h4 onDoubleClick={() => this.toggle()}>{this.props.name}</h4>
        )}
        <img src={this.props.img} alt={this.props.name} />
        <button onClick={() => this.props.releaseFn(this.props.id)}>Release</button>
      </div>
    );
  }
}

export default Pokemon;
