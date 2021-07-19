import './list.css';
import React from 'react'

// class List extends React.Component {
//   //------------------------------------------------------------
//   // Move the checked stuff to a Checkbox class at some point!
//   this.state = {
//       isChecked: false,
//     }
//   }
//   toggleChecked = () => {
//     this.setState({ isChecked: !this.state.isChecked })
//   }
//   //------------------------------------------------------------


//   // createList() {
//   //   const sentences = ['My First Todo', 'Another Todo What a Surprise!','Completed! Yay']; 
//   //     const listItems = sentences.map((sentence,index) => (
//   //       <li key={index}>
//   //         <input type="checkbox" name="topping" />
//   //         <label> {sentence}</label>
//   //       </li>
//   //     ));
//   //     return listItems
//   // }

//   render() { 
//     const sentences = ['My First Todo', 'Another Todo What a Surprise!','Completed! Yay']; 
//     const listItems = sentences.map((sentence,index) => (
//       <li key={index}>
//         <input type="checkbox" name="topping" />
//         <label> {sentence}</label>
//       </li>
//     ));
    
//     return (    
//     <div className="List">
//       <ul> listItems </ul>
//     </div>)
//   };
// }



function List() {
 const sentences = ['My First Todo', 'Another Todo What a Surprise!','Completed! Yay']; 
  const listItems = sentences.map((sentence,index) => (
    <li key={index}>
      <input type="checkbox" name="topping" />
      <label> {sentence}</label>
    </li>
  ));
  return (
    <div className="List">
      <ul>{listItems}</ul>
    </div>
  );
}



export default List;

//<li key={index}></li>