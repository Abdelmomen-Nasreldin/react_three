import logo from './logo.svg';
import './App.css';
import Header from './components/Solid/Header';
import DummyText from './components/Solid/DummyText';
import Meal from './components/Meals/Meal';
import MealsBox from './components/Meals/MealsBox';

function App() {
  return (
    <div className="App">
      <Header />
      <DummyText />
      <MealsBox />
    </div>
  );
}

export default App;
