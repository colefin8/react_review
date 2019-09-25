import React, { Component } from "react";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoArray: [],
      userInput: ""
    };
  }

  handleInput = value => {
    this.setState({
      userInput: value
    });
  };

  handleAdd = () => {
    this.setState({
      toDoArray: [
        ...this.state.toDoArray,
        { item: this.state.userInput, complete: false }
      ],
      userInput: ""
    });
    // console.log(this.state.toDoArray)
  };

  deleteItem = index => {
    let listCopy = [...this.state.toDoArray];
    listCopy.splice(index, 1);
    this.setState({ toDoArray: listCopy });
    // console.log(this.state.toDoArray);
  };

  completeItem = index => {
    let listCopy = [...this.state.toDoArray];
    listCopy[index].complete = true;
    this.setState({ toDoArray: listCopy });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <input
          value={this.state.userInput}
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.handleAdd()}>Add Item</button>
        <List
          todo={this.state.toDoArray}
          deleteItem={this.deleteItem}
          completeItem={this.completeItem}
        />
      </div>
    );
  }
}

export default App;
