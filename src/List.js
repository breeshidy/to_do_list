import './list.css';
import React from 'react'
import Checkbox from './Checkbox.js'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {list: ['My First Todo', 'Another Todo What a Surprise!','Completed! Yay']}
  }

  constructList = () => {
    console.log(this.state.list)
    console.log(this.state.list[0])
    const newList = this.state.list.map((sentence,index) => (
    <li key={index}>
      <Checkbox sentence={sentence}/>
      {/* <input type="checkbox" name="topping"/>
      <label> {sentence}</label> */}
    </li>)
    )
    return newList
  }

  render(){
    return(
    <div className="List">
        <ul>
        {this.constructList()}
        </ul>
    </div>
    )
  }


}





// function List() {
//  const sentences = ['My First Todo', 'Another Todo What a Surprise!','Completed! Yay']; 
//   const listItems = sentences.map((sentence,index) => (
//     <li key={index}>
//       <input type="checkbox" name="topping" />
//       <label> {sentence}</label>
//     </li>
//   ));
//   return (
//     <div className="List">
//       <ul>{listItems}</ul>
//     </div>
//   );
// }



export default List;

//<li key={index}></li>