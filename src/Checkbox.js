import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textDecoration: "none", checked: "" };
  }

  toggleCheck = () => {
    // alert(this.props.sentence)
    this.setState({ textDecoration: "line-through" });
    // this.setState({checked:""})
  };

  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.toggleCheck} />
        <label style={{ textDecoration: this.state.textDecoration }}>
          {" "}
          {this.props.sentence}
        </label>
      </div>
    );
  }
}

export default Checkbox;
