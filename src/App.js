import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Selectors from './components/Selectors';
import AddWord from './components/AddWord';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddWord />
        <Card />
        <Selectors />
      </main>
    </div>
  );
}

export default App;
