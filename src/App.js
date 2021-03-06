// import logo from './logo.svg';
import './App.css';
import {Clock} from "./components/Clock";
import {LoginControl} from "./components/Toggle";
import {NumberLists} from "./components/NumberList";
import {NameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";
import Counter from "./components/Counter";

function App() {
    const numbers = [1, 2, 3, 4, 5, 6]
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <Counter/>
                <Clock/>
                <div>
                    <NameForm/>
                </div>
                <LoginControl/>
                <EssayForm/>
                <FlavorForm/>
                <NumberLists numbers={numbers}/>
            </header>
        </div>
    );
}

export default App;
