import './App.css';
import Header from './Header/Header'

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
