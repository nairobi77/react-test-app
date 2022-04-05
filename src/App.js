import logo from './logo.svg';
import './App.css';
import {Clock} from "./components/Clock";
import {LoginControl} from "./components/Toggle";
import {NumberLists} from "./components/NumberList";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginControl/>
        <NumberLists numbers={numbers}/>
      </header>
    </div>
  );
}

export default App;
