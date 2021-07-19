import "./App.css";

function List() {
 const sentences = ['My First Todo', 'Another Todo, What a Surprise!','Completed! Yay']; 
  const listItems = sentences.map((sentence) => (
    <li>
      <input type="checkbox" id="check1" name="topping" />
      <label for="check1"> {sentence}</label>
    </li>
  ));
  return (
    <div className="List">
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
    // <input type="checkbox" id="check1" name="topping" />
    //   <label for="check1"> {sentence}</label>
    //   <br></br>
    //   <input type="checkbox" id="check1" name="topping" />
    //   <label for="check1"> My First Todo</label>
    //   <br></br>
    //   <input type="checkbox" id="check1" name="topping" />
    //   <label for="check1"> My First Todo</label>
    //   <br></br>
