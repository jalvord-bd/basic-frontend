import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const response = axios
	.get('https://0.0.0.0:3030/api/v1/basic/1')
  	.then(response => console.log(response))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
