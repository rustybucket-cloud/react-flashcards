import './App.css';
import Header from './components/Header';
import Flashcards from './components/Flashcards';
import Card from './components/Card';
import Selectors from './components/Selectors';
import AddWord from './components/AddWord';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Flashcards />
      <Footer />
    </div>
  );
}

export default App;
