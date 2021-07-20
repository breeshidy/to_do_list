import "./list.css";
import React from "react";
import Checkbox from "./Checkbox.js";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "My First Todo",
        "Another Todo What a Surprise!",
        "Completed! Yay",
      ],
      value: ''
    };
  }

  constructList = () => {
    const newList = this.state.list.map((sentence, index) => (
      <li key={index}>
        <Checkbox sentence={sentence} />
      </li>
    ));
    return newList;
  };
  
  onSaveValue = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value });
  }

  addList = () => {
    this.state.list.push(this.state.value);

    //this re renders the window
    this.setState({});

    //this is a bad command to use
    // this.forceUpdate();
  };

  removeList= () => {
    this.setState({list: []})
    this.setState({});
  }

  render() {
    return (
      <div className="List">
        <input
          type="text"
          className="Searchbox"
          placeholder="add item here"
          name="test"
          onChange={this.onSaveValue}
        ></input>
        <button id="save" onClick={this.addList}>
          Save
        </button>
        <button id="save" onClick={this.removeList}>
          Clear
        </button>
        <ul>{this.constructList()}</ul>
      </div>
    );
  }
}

export default List;
