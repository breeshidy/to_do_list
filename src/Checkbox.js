import React from 'react'

class Checkbox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
    <div>
      <input type="checkbox"/>
      <label> {this.props.sentence}</label>
    </div>
    )
  }

}

export default Checkbox