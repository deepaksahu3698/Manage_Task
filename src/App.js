import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/navbar"
import AddTodo from "./Component/addtodo"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AddTodo/>
    </div>
  );
}

export default App;
