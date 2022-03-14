import './App.css';
import CalculatorWindow from './components/CalculatorWindow';
import AncientCalculator from './components/AncientCalculator';

function App() {
  
  const MODERNSPECS = ['Mutilator', 'Chronomancer', 'Telekinetic', 'Illusionist', 'Soldier'];
  return (
    <div className='app'>
      <CalculatorWindow>
        <AncientCalculator/>
      </CalculatorWindow>
      <CalculatorWindow>

      </CalculatorWindow>
    </div>
  );
}

export default App;
