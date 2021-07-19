import logo from './logo.svg';
import './App.css';
import List from './List.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">Yet Another Todo List</header>
      <input type='text' className="Searchbox" placeholder="add item here"></input>
      <button id='save'>Save</button>
      <List/>
    </div>
  );
}

export default App;
