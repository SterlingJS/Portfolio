import jim from './jim.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	 	<img src={jim} className="App-logo" alt="jim" />
		
        <p className='jim-name'>James Sterling</p>
      </header>
    </div>
  );
}

export default App;
