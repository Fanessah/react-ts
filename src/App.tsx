import Counter from './Components/Counter';
import Greeting from './components/Greeting';
import Photocard from '/components/Photocard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Hello Type Script</h1>
       <Counter/>
       <Greeting firstName='Fanessa' lastName='Hilaire'/>
        
      </header>
    </div>
  );
}

export default App;
