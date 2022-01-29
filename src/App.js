import './App.css';
import Header from './components/Solid/Header';
import DummyText from './components/Solid/DummyText';
import MealsBox from './components/Meals/MealsBox';
import Footer from './components/Solid/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <DummyText />
      <MealsBox />
      <Footer />
    </div>
  );
}

export default App;
