import './App.css';
import AncientCalculator from './components/Ancient/AncientCalculator';
import ModernCalculator from './components/Modern/ModernCalculator';
import {useState} from 'react';

function App() {

  const [ancientPassiveAttributes, setAncientPassiveAttributes] = useState({});
  const [modernPassiveAttributes, setModernPassiveAttributes] = useState({});

  return (
    <div className='app'>
      <AncientCalculator passiveAttributes={modernPassiveAttributes} setPassiveAttributes={setAncientPassiveAttributes}/>
      <ModernCalculator passiveAttributes={ancientPassiveAttributes} setPassiveAttributes={setModernPassiveAttributes}/>
    </div>
  );
}

export default App;
