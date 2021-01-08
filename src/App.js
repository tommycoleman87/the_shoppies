import Header from './Header/Header'
import './App.css';
import MovieCards from './MovieCards/MovieCards'
function App() {
  return (
    <div className="App">
      <Header />
      <MovieCards movies={['Crow', 'Jumanji', 'Jurassic Park']} />
    </div>
  );
}

export default App;
