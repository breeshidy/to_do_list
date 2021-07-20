import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textDecoration: "none", checked: "" , handlerFunction: this.checkOn};
  }

  checkOn = () => {
    // alert(this.props.sentence)
    this.setState({ textDecoration: "line-through" });
    // this.setState({checked:""})

    this.setState({handlerFunction: this.checkOff});
  };

  checkOff = () => {
    // alert(this.props.sentence)
    this.setState({ textDecoration: "none" });
    // this.setState({checked:""})

    this.setState({handlerFunction: this.checkOn});
  };

  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.state.handlerFunction} />
        <label style={{ textDecoration: this.state.textDecoration }}>
          {" "}
          {this.props.sentence}
        </label>
      </div>
    );
  }
}

export default Checkbox;
