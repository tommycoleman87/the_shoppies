import logo from './logo.svg';
import './App.css';
import MovieCards from './MovieCards/MovieCards'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the Shoppies!
      </header>
      <MovieCards movies={['Crow', 'Jumanji', 'Jurassic Park']} />
    </div>
  );
}

export default App;
