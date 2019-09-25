import React, { Component } from "react";
import "../App.css";

class List extends Component {
  render() {
    const arr = this.props.todo;
    return (
      <div>
        {arr.map((element, index) => {
          return (
            <div key={index} className="listItem">
              <div
                style={{
                  textDecoration: element.complete ? "line-through" : ""
                }}
              >
                {element.item}
              </div>
              <button onClick={() => this.props.deleteItem(index)}>
                Delete
              </button>
              <button onClick={() => this.props.completeItem(index)}>
                Done
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
